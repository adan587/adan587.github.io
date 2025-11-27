// script.js
// Données (basées sur ton code React)
const projetsPersonnels = [
  {
    titre: "Projet IPISCINE : Infrastructure Réseau avec OPNsense",
    description: "Réalisation d'une infrastructure réseau complète en virtuel : DHCP via OPNsense, règles de firewall et serveur VPN OPNvpn.",
    technologies: ["OPNsense","DHCP","Firewall Rules","OPNvpn","LAN/WAN"],
    apprentissages: "Configuration DHCP sur OPNsense, règles firewall, VPN OPNvpn, segmentation du trafic."
  },
  {
    titre: "Projet Tutoré : Environnement d'Entraînement Cybersécurité",
    description: "Création de machines vulnérables pour des exercices sur Proxmox, déploiement automatisé via Ansible.",
    technologies: ["Proxmox","Ansible","Automatisation"],
    apprentissages: "Déploiement VM vulnérables et automatisation Ansible."
  }
];

const projetsScolaires = [
  {
    titre: "Home Lab – Infrastructure & Sécurité",
    description: "Home lab complet : Proxmox, OPNsense, routeur Linux, WireGuard, DHCP/routing, VLAN/NAT.",
    technologies: ["Proxmox","OPNsense","Linux","WireGuard","DHCP/Routing"],
    apprentissages: "Déploiement d'une infra virtuelle multi-réseaux et bonnes pratiques sécurité."
  }
];

const competences = [
  {
    categorie: "Cybersécurité",
    skills: ["Chiffrement & auth","Sécurisation des accès","Outils de découverte","VPN (WireGuard)","Machines vulnérables","Analyse réseau"]
  },
  {
    categorie: "Réseaux",
    skills: ["OSI / TCP-IP","DHCP","DNS","HTTP/HTTPS","SSH","Firewall OPNsense","OPNvpn","Cisco Packet Tracer","LAN/WAN"]
  },
  {
    categorie: "Systèmes d'exploitation",
    skills: ["Linux (Debian/Ubuntu/CentOS)","Windows Server (AD DS/DNS/DHCP/IIS)","Gestion utilisateurs","Bash","PowerShell"]
  },
  {
    categorie: "Virtualisation",
    skills: ["Proxmox VE","VMware Workstation","Gestion VM","Virtualisation imbriquée","Automatisation VM"]
  },
  {
    categorie: "Outils & DevOps",
    skills: ["Ansible","Git/GitHub","Shell scripting","Wireshark","Gestion de configuration"]
  }
];

const parcours = [
  { titre: 'Bachelor Infrastructure Réseaux Cybersécurité', etablissement: 'IPI - Groupe Igensia', periode: '2024 - 2027', detail: 'Actuellement en seconde année' },
  { titre: 'Baccalauréat technologique', etablissement: 'Lycée Polyvalent Saint Exupéry', periode: '2024', detail: '' }
];

const experiences = [
  { titre: 'Agent Polyvalent', structure: 'Intermarché Merville', periode: 'Depuis Septembre 2024', detail: 'CDI étudiant' },
  { titre: 'Agent Polyvalent', structure: 'Carrefour Lacanau', periode: 'Août 2023', detail: 'Emploi saisonnier' },
  { titre: 'Animateur', structure: 'Cap33 Lacanau', periode: 'Août 2023', detail: 'Emploi saisonnier' },
  { titre: 'Stage de découverte', structure: 'Airbus', periode: 'Janvier 2021', detail: '' }
];

// --- Helpers pour DOM ---
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// --- Rendu dynamique des listes ---
function renderParcours() {
  const container = $('#parcoursList');
  parcours.forEach(p => {
    const el = document.createElement('div');
    el.className = 'bg-slate-800/40 backdrop-blur rounded-xl p-6 border border-hacker-700/30 hover:shadow-lg transition';
    el.innerHTML = `
      <div class="flex gap-4 items-start">
        <div class="w-3 h-3 rounded-full bg-accent-blue mt-2 shrink-0"></div>
        <div>
          <h3 class="text-lg font-semibold text-green-200">${p.titre}</h3>
          <p class="text-sm text-gray-400">${p.etablissement} • <span class="text-gray-300">${p.periode}</span></p>
          ${p.detail ? `<p class="mt-2 text-gray-300">${p.detail}</p>` : ''}
        </div>
      </div>`;
    container.appendChild(el);
  });
}

function renderExperiences() {
  const container = $('#experiencesList');
  experiences.forEach(e => {
    const el = document.createElement('div');
    el.className = 'bg-slate-800/40 rounded-xl p-4 border border-hacker-700/30';
    el.innerHTML = `<h3 class="font-semibold text-green-200">${e.titre} - <span class="text-purple-200">${e.structure}</span></h3>
      <p class="text-sm text-gray-400">${e.periode} ${e.detail ? `• ${e.detail}` : ''}</p>`;
    container.appendChild(el);
  });
}

function renderProjects() {
  const sc = $('#projetsScolaires');
  const pc = $('#projetsPersonnels');
  projetsScolaires.forEach(p => sc.appendChild(projectCard(p)));
  projetsPersonnels.forEach(p => pc.appendChild(projectCard(p)));
}

function projectCard(projet) {
  const card = document.createElement('div');
  card.className = 'bg-slate-800/50 rounded-xl p-6 border border-hacker-700/20 hover:scale-105 transition transform text-center';
  card.innerHTML = `
    <h4 class="text-lg font-bold text-green-100 mb-2">${projet.titre}</h4>
    <p class="text-gray-300 mb-3">${projet.description}</p>
    <div class="flex flex-wrap gap-2 justify-center mb-3">${projet.technologies.map(t=>`<span class="px-3 py-1 bg-hacker-700/30 rounded-full text-sm">${t}</span>`).join('')}</div>
    <button class="openProject inline-flex items-center text-accent-blue hover:underline" data-title="${escapeHtml(projet.titre)}">Voir le projet</button>
  `;
  return card;
}

function renderSkills() {
  const container = $('#skillsGrid');
  competences.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'bg-slate-800/50 rounded-xl p-6 border border-hacker-700/30 text-center';
    card.innerHTML = `<h3 class="text-lg font-bold text-accent-blue mb-4">${cat.categorie}</h3>
      <div class="flex flex-wrap gap-2 justify-center">${cat.skills.map(s=>`<span class="px-3 py-1 bg-hacker-700/20 rounded-full text-sm text-green-100">${s}</span>`).join('')}</div>`;
    container.appendChild(card);
  });
}

function escapeHtml(s){ return s.replaceAll('"','&quot;'); }

// --- Modal logic ---
const contactModal = $('#contactModal');
const projectModal = $('#projectModal');
$('#openContactBtn').addEventListener('click', ()=> contactModal.classList.remove('hidden'));
$('#closeContact').addEventListener('click', ()=> contactModal.classList.add('hidden'));
contactModal.addEventListener('click', (e)=> { if(e.target === contactModal) contactModal.classList.add('hidden'); });

document.addEventListener('click', (e)=>{
  if(e.target.matches('.openProject')){
    const title = e.target.dataset.title;
    // find project
    const proj = [...projetsScolaires, ...projetsPersonnels].find(p => p.titre === title);
    if(!proj) return;
    $('#pmTitle').textContent = proj.titre;
    $('#pmDesc').textContent = proj.description;
    $('#pmTech').innerHTML = proj.technologies.map(t=>`<span class="px-2 py-1 bg-hacker-700/30 rounded-full text-sm mr-2">${t}</span>`).join('');
    $('#pmLearn').textContent = proj.apprentissages || '';
    projectModal.classList.remove('hidden');
  }
  if(e.target.id === 'closeProject') projectModal.classList.add('hidden');
});
projectModal.addEventListener('click', (e)=> { if(e.target === projectModal) projectModal.classList.add('hidden'); });

// --- Navigation scroll / active button logic (robuste) ---
const navButtons = Array.from(document.querySelectorAll('.nav-btn'));
navButtons.forEach(b => b.addEventListener('click', (ev)=>{
  const id = ev.currentTarget.dataset.target;
  document.getElementById(id).scrollIntoView({behavior:'smooth', block:'center'});
}));

// We'll track intersection ratios to pick the most visible section
const sections = ['accueil','apropos','parcours','experiences','projets','competences'];
const visibility = {};
sections.forEach(s => visibility[s]=0);

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const id = entry.target.id;
    visibility[id] = entry.intersectionRatio;
  });
  // pick the section with highest ratio
  const visible = Object.keys(visibility).reduce((a,b)=> visibility[a] > visibility[b] ? a : b);
  // update nav active class
  navButtons.forEach(btn=>{
    if(btn.dataset.target === visible){
      btn.classList.add('bg-gradient-to-r','from-hacker-600','to-accent-blue','text-white','transform','scale-105','shadow-glow-green');
      btn.classList.remove('text-gray-300');
    } else {
      btn.classList.remove('bg-gradient-to-r','from-hacker-600','to-accent-blue','text-white','transform','scale-105','shadow-glow-green');
      btn.classList.add('text-gray-300');
    }
  });
}, {
  threshold: Array.from({length:21}, (_,i)=> i/20), // many thresholds for smooth updates
  root: null,
  rootMargin: '-20% 0px -20% 0px' // focus on center area
});

sections.forEach(id => {
  const el = document.getElementById(id);
  if(el) observer.observe(el);
});

// --- Small performance & UX tweaks ---
window.addEventListener('load', ()=>{
  renderParcours();
  renderExperiences();
  renderProjects();
  renderSkills();

  // replace lucide icons (if loaded)
  if(window.lucide) lucide.replace();

  // reduce motion if user prefers reduced motion
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.transition, .transform').forEach(el=> el.style.transition='none');
  }
});
