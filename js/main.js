/**
 * VibeLabs - Interactive Engine & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Vibecoding Terminal Simulator
  initTerminalSimulator();

  // 2. Portfolio App Switcher (Smartphone Mockup)
  initPortfolioSwitcher();

  // 3. Card 3D Tilt Effect
  initTiltEffect();

  // 4. Contact / Pitch Modal
  initModal();

  // 5. Stat Counter Animation
  initStatCounters();
});

/* ==========================================================================
   1. Interactive Terminal Simulator
   ========================================================================== */
function initTerminalSimulator() {
  const chips = document.querySelectorAll('.chip-btn');
  const terminalInput = document.getElementById('terminal-input');
  const runBtn = document.getElementById('run-prompt-btn');
  const logsContainer = document.getElementById('terminal-logs');
  const previewIcon = document.getElementById('preview-icon');
  const previewTitle = document.getElementById('preview-title');
  const previewTag = document.getElementById('preview-tag');
  const previewDownloads = document.getElementById('preview-downloads');
  const previewRating = document.getElementById('preview-rating');

  const presets = {
    'video': {
      prompt: 'Synthesize multilingual lip-sync & emotional voice cloning video app',
      title: 'VibeMotion Studio',
      tag: 'Creative Tools • Generative AI',
      icon: '🎬',
      iconBg: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      downloads: '4.2M+',
      rating: '4.9★',
      steps: [
        { text: '> [1/4] Parsing latent user intent & multi-modal pipeline...', color: 'cyan' },
        { text: '> [2/4] Generating CoreML neural lip-sync engine & Metal shaders...', color: 'purple' },
        { text: '> [3/4] Synthesizing paywall & onboarding flow with 42% benchmark cvr...', color: 'yellow' },
        { text: '✓ [4/4] Native iOS build assembled in 3.8s. TestFlight live!', color: 'green' }
      ]
    },
    'copilot': {
      prompt: 'Autonomous creator copilot with multi-agent research & canvas editing',
      title: 'PromptPilot Pro',
      tag: 'Productivity • Agentic AI',
      icon: '⚡',
      iconBg: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
      downloads: '6.8M+',
      rating: '4.9★',
      steps: [
        { text: '> [1/4] Initializing autonomous agent swarm [Planner + Coder + Critic]...', color: 'cyan' },
        { text: '> [2/4] Hooking up low-latency streaming endpoints & vector store...', color: 'purple' },
        { text: '> [3/4] Optimizing battery drain: 0.8% / hour background inference...', color: 'yellow' },
        { text: '✓ [4/4] Shipped to App Store. Ranked #1 in 32 countries!', color: 'green' }
      ]
    },
    'voice': {
      prompt: 'Sub-150ms real-time conversational companion with emotion adaptation',
      title: 'EchoVerse AI',
      tag: 'Audio • Real-time Speech',
      icon: '🎙️',
      iconBg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      downloads: '3.1M+',
      rating: '4.8★',
      steps: [
        { text: '> [1/4] Quantizing 7B voice foundation model to 4-bit INT4 device weights...', color: 'cyan' },
        { text: '> [2/4] WebRTC bidirectional audio stream established (128ms latency)...', color: 'purple' },
        { text: '> [3/4] Generating 10 hyper-realistic persona profiles with voice samples...', color: 'yellow' },
        { text: '✓ [4/4] Apple "App of the Day" showcase badge triggered!', color: 'green' }
      ]
    },
    'camera': {
      prompt: 'Real-time neural film grading & promptable aesthetic camera engine',
      title: 'AuraCam Vision',
      tag: 'Photo & Video • Diffusion',
      icon: '📸',
      iconBg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      downloads: '5.4M+',
      rating: '4.8★',
      steps: [
        { text: '> [1/4] Compiling custom Metal Performance Shaders for live 60fps feed...', color: 'cyan' },
        { text: '> [2/4] Calibrating 35mm grain synthesis & anamorphic flare generator...', color: 'purple' },
        { text: '> [3/4] Hooking viral TikTok export integration with sound match...', color: 'yellow' },
        { text: '✓ [4/4] #AuraCam trending with 240M+ views across socials!', color: 'green' }
      ]
    }
  };

  let isExecuting = false;

  function runSimulation(presetKey) {
    if (isExecuting) return;
    const config = presets[presetKey] || presets['video'];
    isExecuting = true;

    terminalInput.value = config.prompt;
    logsContainer.innerHTML = '';

    // Step-by-step logs
    config.steps.forEach((step, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = `log-line ${step.color}`;
        line.textContent = step.text;
        logsContainer.appendChild(line);
        logsContainer.scrollTop = logsContainer.scrollHeight;

        if (index === config.steps.length - 1) {
          isExecuting = false;
          // Update preview card
          previewIcon.textContent = config.icon;
          previewIcon.style.background = config.iconBg;
          previewTitle.textContent = config.title;
          previewTag.textContent = config.tag;
          previewDownloads.textContent = config.downloads;
          previewRating.textContent = config.rating;
        }
      }, (index + 1) * 380);
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const preset = chip.getAttribute('data-preset');
      runSimulation(preset);
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const activeChip = document.querySelector('.chip-btn.active');
      const key = activeChip ? activeChip.getAttribute('data-preset') : 'video';
      runSimulation(key);
    });
  }

  // Auto run initial video preset simulation
  setTimeout(() => runSimulation('video'), 800);
}

/* ==========================================================================
   2. Smartphone Mockup Portfolio Switcher
   ========================================================================== */
function initPortfolioSwitcher() {
  const cards = document.querySelectorAll('.app-card');
  const screen = document.getElementById('phone-screen');
  const screenCategory = document.getElementById('screen-category');
  const screenTitle = document.getElementById('screen-title');
  const screenDesc = document.getElementById('screen-desc');
  const screenFeature1 = document.getElementById('screen-feat-1');
  const screenFeature2 = document.getElementById('screen-feat-2');
  const screenBtn = document.getElementById('screen-action-btn');

  const appData = {
    'vibemotion': {
      cat: 'CREATIVE AI',
      title: 'VibeMotion AI',
      desc: 'Generative video & neural lip-sync engine with broadcast quality.',
      feat1: 'Emotion-Matched Motion',
      feat2: '1440p 60fps Native Export',
      btn: 'Synthesize Next Clip ⚡',
      bg: 'linear-gradient(180deg, rgba(236, 72, 153, 0.25) 0%, #080a11 100%)'
    },
    'promptpilot': {
      cat: 'PRODUCTIVITY',
      title: 'PromptPilot Pro',
      desc: 'Autonomous workspace copilot handling multi-turn creative tasks.',
      feat1: 'Multi-Agent Autonomous Loops',
      feat2: '1-Click App Blueprinting',
      btn: 'Launch Autonomous Flow 🚀',
      bg: 'linear-gradient(180deg, rgba(0, 245, 160, 0.25) 0%, #080a11 100%)'
    },
    'echoverse': {
      cat: 'AUDIO & VOICE',
      title: 'EchoVerse AI',
      desc: 'Real-time conversational personas with hyper-expressive low latency.',
      feat1: 'Sub-150ms Speech Synthesis',
      feat2: 'Dynamic Mood Tracking',
      btn: 'Start Voice Session 🎙️',
      bg: 'linear-gradient(180deg, rgba(245, 158, 11, 0.25) 0%, #080a11 100%)'
    },
    'auracam': {
      cat: 'NEURAL CAMERA',
      title: 'AuraCam Vision',
      desc: 'Promptable aesthetic camera running real-time diffusion grading.',
      feat1: 'Live 60fps Metal Shaders',
      feat2: 'Promptable Color Science',
      btn: 'Capture Neural Frame 📸',
      bg: 'linear-gradient(180deg, rgba(6, 182, 212, 0.25) 0%, #080a11 100%)'
    }
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');

      const appId = card.getAttribute('data-app');
      const data = appData[appId];
      if (!data) return;

      screen.style.opacity = '0.3';
      setTimeout(() => {
        screenCategory.textContent = data.cat;
        screenTitle.textContent = data.title;
        screenDesc.textContent = data.desc;
        screenFeature1.textContent = data.feat1;
        screenFeature2.textContent = data.feat2;
        screenBtn.textContent = data.btn;
        screen.style.background = data.bg;
        screen.style.opacity = '1';
      }, 150);
    });
  });
}

/* ==========================================================================
   3. 3D Tilt Effect on Bento & Feature Cards
   ========================================================================== */
function initTiltEffect() {
  const tiltElements = document.querySelectorAll('.bento-card, .app-card, .career-card');

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      el.style.transform = `perspective(800px) rotateX(${-deltaY * 3}deg) rotateY(${deltaX * 3}deg) translateY(-2px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   4. Contact / Pitch Modal
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('contact-modal');
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('modal-success-msg');

  if (!modal) return;

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successMsg) {
        successMsg.style.display = 'block';
      }
      setTimeout(() => {
        modal.classList.remove('active');
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          if (successMsg) successMsg.style.display = 'none';
        }, 500);
      }, 2500);
    });
  }
}

/* ==========================================================================
   5. Stat Counter Animation
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach((counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const suffix = counter.getAttribute('data-suffix') || '';
            const isFloat = target % 1 !== 0;
            let current = 0;
            const step = target / 40;

            const interval = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = (isFloat ? target.toFixed(1) : Math.round(target)) + suffix;
                clearInterval(interval);
              } else {
                counter.textContent = (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
              }
            }, 30);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}
