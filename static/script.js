const chatBox = document.getElementById('chat-box');
const input   = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);

  if (sender === 'bot') {
    msg.innerHTML = text;
  } else {
    msg.textContent = text;
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Light sanitizer (unchanged logic) */
function sanitizeHTML(dirty) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(dirty, 'text/html');

  const whitelist = new Set(['BR','B','STRONG','I','EM','U','UL','OL','LI','P']);

  function clean(node) {
    const children = Array.from(node.childNodes);
    for (const child of children) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (!whitelist.has(child.tagName)) {
          const frag = document.createDocumentFragment();
          while (child.firstChild) frag.appendChild(child.firstChild);
          node.replaceChild(frag, child);
        } else {
          [...child.attributes].forEach(a => child.removeAttribute(a.name));
          clean(child);
        }
      } else if (child.nodeType !== Node.TEXT_NODE) {
        node.removeChild(child);
      }
    }
  }

  clean(doc.body);
  return doc.body.innerHTML;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';
  sendBtn.disabled = true;

  try {
    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    sendBtn.disabled = false;

    let data;
    try {
      data = await res.json();
    } catch {
      data = { reply: await res.text() };
    }

    let reply =
      data.reply ||
      data.bot ||
      data.message ||
      JSON.stringify(data);

    reply = reply.replace(/\n/g, '<br>');
    appendMessage(sanitizeHTML(reply), 'bot');

  } catch (err) {
    sendBtn.disabled = false;
    appendMessage('⚠️ Server error. Please try again.', 'bot');
  }
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendMessage();
});
