const translations={
 fr:{home:'Accueil',talents:'Talents',network:'Réseau',founder:'Fondateur',join:'Inscription',heroKicker:'LE RÉSEAU MONDIAL DES TALENTS DU FOOTBALL',heroTitle:'Le talent africain mérite une scène mondiale.',heroText:'Une plateforme professionnelle qui connecte joueurs, clubs, agents et scouts autour de profils fiables, vidéos et opportunités.',discover:'Découvrir les talents',create:'Créer un profil',players:'Talents en lumière',playersText:'Des profils structurés pour faciliter l’évaluation et accélérer les opportunités.',how:'Comment ça marche',networkTitle:'Un réseau pensé pour le football',joinTitle:'Rejoindre Africa Talent Football'},
 en:{home:'Home',talents:'Talents',network:'Network',founder:'Founder',join:'Join',heroKicker:'THE GLOBAL FOOTBALL TALENT NETWORK',heroTitle:'African talent deserves a global stage.',heroText:'A professional platform connecting players, clubs, agents and scouts through trusted profiles, video and opportunities.',discover:'Discover talents',create:'Create a profile',players:'Featured talents',playersText:'Structured profiles designed to simplify evaluation and accelerate opportunities.',how:'How it works',networkTitle:'A network built for football',joinTitle:'Join Africa Talent Football'},
 es:{home:'Inicio',talents:'Talentos',network:'Red',founder:'Fundador',join:'Registro',heroKicker:'LA RED MUNDIAL DEL TALENTO FUTBOLÍSTICO',heroTitle:'El talento africano merece un escenario mundial.',heroText:'Una plataforma profesional que conecta jugadores, clubes, agentes y scouts.',discover:'Descubrir talentos',create:'Crear perfil',players:'Talentos destacados',playersText:'Perfiles estructurados para facilitar la evaluación y acelerar oportunidades.',how:'Cómo funciona',networkTitle:'Una red pensada para el fútbol',joinTitle:'Únete a Africa Talent Football'},
 it:{home:'Home',talents:'Talenti',network:'Rete',founder:'Fondatore',join:'Iscrizione',heroKicker:'LA RETE MONDIALE DEI TALENTI DEL CALCIO',heroTitle:'Il talento africano merita un palcoscenico mondiale.',heroText:'Una piattaforma professionale che collega giocatori, club, agenti e scout.',discover:'Scopri i talenti',create:'Crea un profilo',players:'Talenti in evidenza',playersText:'Profili strutturati per semplificare la valutazione e accelerare le opportunità.',how:'Come funziona',networkTitle:'Una rete pensata per il calcio',joinTitle:'Unisciti ad Africa Talent Football'},
 pt:{home:'Início',talents:'Talentos',network:'Rede',founder:'Fundador',join:'Inscrição',heroKicker:'A REDE GLOBAL DE TALENTOS DO FUTEBOL',heroTitle:'O talento africano merece um palco mundial.',heroText:'Uma plataforma profissional que conecta jogadores, clubes, agentes e scouts.',discover:'Descobrir talentos',create:'Criar perfil',players:'Talentos em destaque',playersText:'Perfis estruturados para facilitar a avaliação e acelerar oportunidades.',how:'Como funciona',networkTitle:'Uma rede criada para o futebol',joinTitle:'Junte-se à Africa Talent Football'},
 de:{home:'Startseite',talents:'Talente',network:'Netzwerk',founder:'Gründer',join:'Registrieren',heroKicker:'DAS GLOBALE FUSSBALLTALENT-NETZWERK',heroTitle:'Afrikanisches Talent verdient eine globale Bühne.',heroText:'Eine professionelle Plattform für Spieler, Vereine, Agenten und Scouts.',discover:'Talente entdecken',create:'Profil erstellen',players:'Talente im Fokus',playersText:'Strukturierte Profile für bessere Bewertung und mehr Chancen.',how:'So funktioniert es',networkTitle:'Ein Netzwerk für Fußball',joinTitle:'Africa Talent Football beitreten'}
};
function setLang(lang){localStorage.setItem('atf_lang',lang);document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang]?.[key])el.textContent=translations[lang][key]});document.querySelectorAll('[data-lang]').forEach(s=>s.value=lang);document.documentElement.lang=lang;}
function initLang(){setLang(localStorage.getItem('atf_lang')||'fr');document.querySelectorAll('[data-lang]').forEach(s=>s.addEventListener('change',e=>setLang(e.target.value)))}
function initDemo(){document.querySelectorAll('[data-connect]').forEach(btn=>btn.addEventListener('click',()=>{btn.textContent='✓ Demande envoyée';btn.disabled=true;btn.classList.add('btn-outline')}));document.querySelectorAll('[data-chat]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('#chat-demo')?.scrollIntoView({behavior:'smooth'})}))}
// ===== Africa Talent Football — V2 Global Layer =====
const ATF_COUNTRIES = [["AF", "Afghanistan"], ["ZA", "Afrique du Sud"], ["AL", "Albania"], ["DZ", "Algeria"], ["AD", "Andorra"], ["AO", "Angola"], ["AG", "Antigua and Barbuda"], ["SA", "Arabie saoudite"], ["AR", "Argentina"], ["AM", "Armenia"], ["AU", "Australia"], ["AT", "Austria"], ["AZ", "Azerbaijan"], ["BS", "Bahamas"], ["BH", "Bahrain"], ["BD", "Bangladesh"], ["BB", "Barbados"], ["BY", "Belarus"], ["BE", "Belgium"], ["BZ", "Belize"], ["BJ", "Benin"], ["BT", "Bhutan"], ["BO", "Bolivie"], ["BA", "Bosnia and Herzegovina"], ["BW", "Botswana"], ["BR", "Brazil"], ["BN", "Brunei"], ["BG", "Bulgaria"], ["BF", "Burkina Faso"], ["BI", "Burundi"], ["KH", "Cambodia"], ["CM", "Cameroon"], ["CA", "Canada"], ["CV", "Cap-Vert"], ["TD", "Chad"], ["CL", "Chile"], ["CN", "China"], ["CO", "Colombia"], ["KM", "Comoros"], ["KP", "Corée du Nord"], ["KR", "Corée du Sud"], ["CR", "Costa Rica"], ["HR", "Croatia"], ["CU", "Cuba"], ["CY", "Cyprus"], ["CI", "Côte d’Ivoire"], ["DK", "Denmark"], ["DJ", "Djibouti"], ["DM", "Dominica"], ["DO", "Dominican Republic"], ["EC", "Ecuador"], ["EG", "Egypt"], ["SV", "El Salvador"], ["ER", "Eritrea"], ["EE", "Estonia"], ["SZ", "Eswatini"], ["ET", "Ethiopia"], ["FJ", "Fiji"], ["FI", "Finland"], ["FR", "France"], ["GA", "Gabon"], ["GM", "Gambia"], ["GE", "Georgia"], ["DE", "Germany"], ["GH", "Ghana"], ["GR", "Greece"], ["GD", "Grenade"], ["GT", "Guatemala"], ["GN", "Guinea"], ["GW", "Guinea-Bissau"], ["GQ", "Guinée équatoriale"], ["GY", "Guyana"], ["HT", "Haiti"], ["VA", "Holy See (Vatican City State)"], ["HN", "Honduras"], ["HU", "Hungary"], ["IS", "Iceland"], ["IN", "India"], ["ID", "Indonesia"], ["IR", "Iran"], ["IQ", "Iraq"], ["IE", "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["JM", "Jamaica"], ["JP", "Japan"], ["JO", "Jordan"], ["KZ", "Kazakhstan"], ["KE", "Kenya"], ["KI", "Kiribati"], ["KW", "Kuwait"], ["KG", "Kyrgyzstan"], ["LA", "Laos"], ["LV", "Latvia"], ["LB", "Lebanon"], ["LS", "Lesotho"], ["LR", "Liberia"], ["LY", "Libya"], ["LI", "Liechtenstein"], ["LT", "Lithuania"], ["LU", "Luxembourg"], ["MK", "Macédoine du Nord"], ["MG", "Madagascar"], ["MW", "Malawi"], ["MY", "Malaysia"], ["MV", "Maldives"], ["ML", "Mali"], ["MT", "Malta"], ["MH", "Marshall Islands"], ["MR", "Mauritania"], ["MU", "Mauritius"], ["MX", "Mexico"], ["FM", "Micronésie"], ["MD", "Moldavie"], ["MC", "Monaco"], ["MN", "Mongolia"], ["ME", "Montenegro"], ["MA", "Morocco"], ["MZ", "Mozambique"], ["MM", "Myanmar"], ["NA", "Namibia"], ["NR", "Nauru"], ["NP", "Nepal"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["NI", "Nicaragua"], ["NE", "Niger"], ["NG", "Nigeria"], ["NO", "Norway"], ["OM", "Oman"], ["PK", "Pakistan"], ["PW", "Palau"], ["PS", "Palestine"], ["PA", "Panama"], ["PG", "Papua New Guinea"], ["PY", "Paraguay"], ["PE", "Peru"], ["PH", "Philippines"], ["PL", "Poland"], ["PT", "Portugal"], ["QA", "Qatar"], ["RO", "Romania"], ["GB", "Royaume-Uni"], ["RU", "Russie"], ["RW", "Rwanda"], ["CF", "République centrafricaine"], ["CG", "République du Congo"], ["CD", "République démocratique du Congo"], ["KN", "Saint Kitts and Nevis"], ["LC", "Saint Lucia"], ["VC", "Saint Vincent and the Grenadines"], ["WS", "Samoa"], ["SM", "San Marino"], ["SN", "Senegal"], ["RS", "Serbia"], ["SC", "Seychelles"], ["SL", "Sierra Leone"], ["SG", "Singapore"], ["SK", "Slovakia"], ["SI", "Slovenia"], ["SB", "Solomon Islands"], ["SO", "Somalia"], ["SS", "Soudan du Sud"], ["ES", "Spain"], ["LK", "Sri Lanka"], ["SD", "Sudan"], ["SR", "Suriname"], ["SE", "Sweden"], ["CH", "Switzerland"], ["SY", "Syrie"], ["ST", "São Tomé-et-Príncipe"], ["TJ", "Tajikistan"], ["TZ", "Tanzanie"], ["CZ", "Tchéquie"], ["TH", "Thailand"], ["TL", "Timor oriental"], ["TG", "Togo"], ["TO", "Tonga"], ["TT", "Trinidad and Tobago"], ["TN", "Tunisia"], ["TM", "Turkmenistan"], ["TR", "Turquie"], ["TV", "Tuvalu"], ["UG", "Uganda"], ["UA", "Ukraine"], ["US", "United States"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VU", "Vanuatu"], ["VE", "Venezuela"], ["VN", "Viêt Nam"], ["YE", "Yemen"], ["ZM", "Zambia"], ["ZW", "Zimbabwe"], ["AE", "Émirats arabes unis"]];

function populateCountries() {
  document.querySelectorAll('[data-countries]').forEach(select => {
    if (select.dataset.loaded === 'true') return;
    const current = select.value;
    ATF_COUNTRIES.forEach(([code, name]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = name;
      select.appendChild(option);
    });
    if (current) select.value = current;
    select.dataset.loaded = 'true';
  });
}

function closeMenu() {
  const header=document.querySelector('.header');
  const button=document.querySelector('.menu');
  if (!header || !button) return;
  header.classList.remove('open');
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-label','Ouvrir le menu');
}

function initMenuV2() {
  const header=document.querySelector('.header'), button=document.querySelector('.menu');
  if(!header || !button) return;
  button.addEventListener('click', e => {
    e.stopPropagation();
    const open=header.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  header.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if(!header.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
}

async function sharePlatform() {
  const shareData={title:'Africa Talent Football',text:'Découvrez Africa Talent Football, la plateforme internationale de talents, clubs, agents et scouts.',url:window.location.href};
  try {
    if(navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(window.location.href);
      const btn=document.querySelector('[data-share]');
      if(btn) { const old=btn.innerHTML; btn.innerHTML='✓ Lien copié'; setTimeout(()=>btn.innerHTML=old,2200); }
    }
  } catch(e) {}
}

function initRegisterDemo() {
  const form=document.querySelector('#register-form'); if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const p=document.querySelector('#password').value;
    const pc=document.querySelector('#passwordConfirm').value;
    const msg=document.querySelector('#register-message');
    if(p!==pc) { msg.className='form-message error'; msg.textContent='Les deux mots de passe ne correspondent pas.'; return; }
    // Demo only: never store raw passwords in production.
    const profile={name:document.querySelector('#fullName').value,email:document.querySelector('#email').value,country:document.querySelector('#country').value,role:document.querySelector('input[name="role"]:checked')?.value||'player'};
    localStorage.setItem('atf_demo_profile',JSON.stringify(profile));
    msg.className='form-message success'; msg.textContent='Profil de démonstration enregistré sur cet appareil. La connexion sécurisée sera activée avec le backend.';
    form.reset(); document.querySelector('#country').value='';
  });
}

function initLoginDemo() {
  const form=document.querySelector('#login-form'); if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg=document.querySelector('#login-message');
    const profile=JSON.parse(localStorage.getItem('atf_demo_profile')||'null');
    if(profile && profile.email===document.querySelector('#loginEmail').value) {
      msg.className='form-message success'; msg.textContent='Compte de démonstration reconnu. Le vrai système d’authentification sera relié au backend sécurisé.';
    } else {
      msg.className='form-message error'; msg.textContent='Aucun compte de démonstration trouvé sur cet appareil. Créez d’abord votre profil.';
    }
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  populateCountries();
  initMenuV2();
  document.querySelectorAll('[data-share]').forEach(b=>b.addEventListener('click',sharePlatform));
  initRegisterDemo();
  initLoginDemo();
});

// ===== V3 Professional Navigation =====
function closeMenuV3(){
  const header=document.querySelector('.header');
  const button=document.querySelector('.menu');
  if(!header || !button) return;
  header.classList.remove('open');
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-label','Ouvrir le menu');
}

function initMenuV3(){
  const header=document.querySelector('.header');
  const button=document.querySelector('.menu');
  if(!header || !button) return;

  button.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    const open=!header.classList.contains('open');
    header.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  header.querySelectorAll('.nav a').forEach(link=>{
    link.addEventListener('click', closeMenuV3);
  });

  document.addEventListener('click', e=>{
    if(!header.contains(e.target)) closeMenuV3();
  });

  document.addEventListener('keydown', e=>{
    if(e.key==='Escape') closeMenuV3();
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initLang();
  initMenuV3();
  initDemo();
  populateCountries();
  document.querySelectorAll('[data-share]').forEach(b=>b.addEventListener('click',sharePlatform));
  initRegisterDemo();
  initLoginDemo();
});
