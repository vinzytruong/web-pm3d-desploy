// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  gradeSeven: {
    root: path(ROOTS_DASHBOARD, '/seven-grade'),
    magnet: path(ROOTS_DASHBOARD, '/seven-grade/magnet'),
    magnetRoad: path(ROOTS_DASHBOARD, '/seven-grade/magnet'),
    earthMagnetic: path(ROOTS_DASHBOARD, '/seven-grade/earth-magnetic'),
    rutherford: path(ROOTS_DASHBOARD, '/seven-grade/rutherford'),
    bohr: path(ROOTS_DASHBOARD, '/seven-grade/bohr'),
    oxi: path(ROOTS_DASHBOARD, '/seven-grade/oxi'),
    hydro: path(ROOTS_DASHBOARD, '/seven-grade/hydro'),
    clo: path(ROOTS_DASHBOARD, '/seven-grade/clo'),
    co2: path(ROOTS_DASHBOARD, '/seven-grade/co2'),
    cu: path(ROOTS_DASHBOARD, '/seven-grade/cu'),
    h2o: path(ROOTS_DASHBOARD, '/seven-grade/h2o'),
    nito: path(ROOTS_DASHBOARD, '/seven-grade/nito'),
    nacl: path(ROOTS_DASHBOARD, '/seven-grade/nacl'),
    nh3: path(ROOTS_DASHBOARD, '/seven-grade/nh3'),
    sound_wave_travel_is_air: path(ROOTS_DASHBOARD, '/seven-grade/sound_wave_travel_is_air'),
    sound_wave_travel_is_water: path(ROOTS_DASHBOARD, '/seven-grade/sound_wave_travel_is_water'),
    sound_wave_travel_is_solids: path(ROOTS_DASHBOARD, '/seven-grade/sound_wave_travel_is_solids'),
    transport_water_in_plants: path(ROOTS_DASHBOARD, '/seven-grade/transport_water_in_plants'),
    transport_water_in_roots: path(ROOTS_DASHBOARD, '/seven-grade/transport_water_in_roots'),
    root_structure: path(ROOTS_DASHBOARD, '/seven-grade/root_structure'),
    feather_sucker: path(ROOTS_DASHBOARD, '/seven-grade/feather_sucker'),
    light_reflection: path(ROOTS_DASHBOARD, '/physics/light_reflection'),

  },
  gradeEight: {
    root: path(ROOTS_DASHBOARD, '/eight-grade'),
    digestive: path(ROOTS_DASHBOARD, '/eight-grade/digestive'),
    earthMagnetic: path(ROOTS_DASHBOARD, '/eight-grade/earth-magnetic'),
    circulatory: path(ROOTS_DASHBOARD, '/eight-grade/circulatory'),
    respiratory: path(ROOTS_DASHBOARD, '/eight-grade/respiratory'),
    nerve: path(ROOTS_DASHBOARD, '/eight-grade/nerve'),
    ear_structure: path(ROOTS_DASHBOARD, '/eight-grade/ear_structure'),
  },
  gradeNine: {
    root: path(ROOTS_DASHBOARD, '/seven-nine'),
    ethylicAlcohol: path(ROOTS_DASHBOARD, '/seven-nine/ethylic-alcohol'),
    fructozo: path(ROOTS_DASHBOARD, '/seven-nine/fructozo'),
    acetic_acid: path(ROOTS_DASHBOARD, '/seven-nine/acetic-acid'),
    glucozo: path(ROOTS_DASHBOARD, '/seven-nine/glucozo'),
    ethane: path(ROOTS_DASHBOARD, '/seven-nine/ethane'),
    cast_iron_furmace: path(ROOTS_DASHBOARD, '/seven-nine/cast_iron_furmace'),
    cementkiln: path(ROOTS_DASHBOARD, '/seven-nine/cementkiln'),
    light_reflection: path(ROOTS_DASHBOARD, '/physics/light_reflection'),
    light_refraction: path(ROOTS_DASHBOARD, '/physics/light_refraction'),
    light_dispersion: path(ROOTS_DASHBOARD, '/physics/light_dispersion'),
  },
  physics: {
    root: path(ROOTS_DASHBOARD, '/physics'),
    lunarEclipse: path(ROOTS_DASHBOARD, '/physics/lunar-eclipse'),
    starmap: path(ROOTS_DASHBOARD, '/physics/starmap'),
    solar_system: path(ROOTS_DASHBOARD, '/physics/solar_system'),
    electrical_circuit: path(ROOTS_DASHBOARD, '/physics/electrical_circuit'),
    capacitor: path(ROOTS_DASHBOARD, '/physics/capacitor'),
    nuclear_structure: path(ROOTS_DASHBOARD, '/physics/nuclear_structure'),
    resonance_oscillation: path(ROOTS_DASHBOARD, '/physics/resonance_oscillation'),
    simple_pendulum_descending: path(ROOTS_DASHBOARD, '/physics/simple_pendulum_descending'),
    simple_pendulum_descending_in_oil: path(ROOTS_DASHBOARD, '/physics/simple_pendulum_descending_in_oil'),
    simple_pendulum_descending_in_water: path(ROOTS_DASHBOARD, '/physics/simple_pendulum_descending_in_water'),
    forced_oscillation: path(ROOTS_DASHBOARD, '/physics/forced_oscillation'),
    fades_in_water: path(ROOTS_DASHBOARD, '/physics/fades_in_water'),
    fades_in_oil: path(ROOTS_DASHBOARD, '/physics/fades_in_oil'),
    fades_in_air: path(ROOTS_DASHBOARD, '/physics/fades_in_air'),
    eclipse: path(ROOTS_DASHBOARD, '/physics/eclipse'),
    tide: path(ROOTS_DASHBOARD, '/physics/tide'),
    gravitational_magnetic_field: path(ROOTS_DASHBOARD, '/physics/gravitational_magnetic_field'),
    xray: path(ROOTS_DASHBOARD, '/physics/xray'),
    light_dispersion: path(ROOTS_DASHBOARD, '/physics/light_dispersion'),
    simulate_earth_sun_moon: path(ROOTS_DASHBOARD, '/physics/simulate_earth_sun_moon')
    
  },
 biology: {
    root: path(ROOTS_DASHBOARD, '/biology'),
    hiv_cells: path(ROOTS_DASHBOARD, '/biology/hiv_cells'),
    prokaryotic: path(ROOTS_DASHBOARD, '/biology/prokaryotic'),
    eukaryotic: path(ROOTS_DASHBOARD, '/biology/eukaryotic'),
    hepatitisB: path(ROOTS_DASHBOARD, '/biology/hepatitisB'),
    cardiovascular: path(ROOTS_DASHBOARD, '/biology/cardiovascular'),
    excretory: path(ROOTS_DASHBOARD, '/biology/excretory'),
    metabolism_in_plants: path(ROOTS_DASHBOARD, '/biology/metabolism_in_plants'),
    pollen: path(ROOTS_DASHBOARD, '/biology/pollen'),
    republish_adn: path(ROOTS_DASHBOARD, '/biology/republish_adn'),
    embryo_sac: path(ROOTS_DASHBOARD, '/biology/embryo_sac'),
  },
  chemistry: {
    root: path(ROOTS_DASHBOARD, '/chemistry'),
    saccarozo: path(ROOTS_DASHBOARD, '/chemistry/saccarozo'),
    ester: path(ROOTS_DASHBOARD, '/chemistry/ester'),
    methane: path(ROOTS_DASHBOARD, '/chemistry/methane'),
    acid_acetic: path(ROOTS_DASHBOARD, '/chemistry/acid_acetic'),
    amino_acid: path(ROOTS_DASHBOARD, '/chemistry/amino_acid'),
    anilin: path(ROOTS_DASHBOARD, '/chemistry/anilin'),
    acetylene: path(ROOTS_DASHBOARD, '/chemistry/acetylene'),
    benzen: path(ROOTS_DASHBOARD, '/chemistry/benzen'),
    electrolytic_cell: path(ROOTS_DASHBOARD, '/chemistry/electrolytic_cell'),
    ethanal: path(ROOTS_DASHBOARD, '/chemistry/ethanal'),
    ethylene: path(ROOTS_DASHBOARD, '/chemistry/ethylene'),
    ethylic_ancohol: path(ROOTS_DASHBOARD, '/chemistry/ethylic_ancohol'),
    maltose: path(ROOTS_DASHBOARD, '/chemistry/maltose'),
    methanal: path(ROOTS_DASHBOARD, '/chemistry/methanal'),
    methanol: path(ROOTS_DASHBOARD, '/chemistry/methanol'),
    methylamine: path(ROOTS_DASHBOARD, '/chemistry/methylamine'),
    phenol: path(ROOTS_DASHBOARD, '/chemistry/phenol'),
    battery: path(ROOTS_DASHBOARD, '/chemistry/battery'),
    protein: path(ROOTS_DASHBOARD, '/chemistry/protein'),
    starch: path(ROOTS_DASHBOARD, '/chemistry/starch'),
    creation_process_starch: path(ROOTS_DASHBOARD, '/chemistry/creation_process_starch'),
    saponification: path(ROOTS_DASHBOARD, '/chemistry/saponification'),
    ethylacetate: path(ROOTS_DASHBOARD, '/chemistry/ethylacetate'),
    benzen_nitrification: path(ROOTS_DASHBOARD, '/chemistry/benzen_nitrification'),
    hydrolyis_of_cellulose: path(ROOTS_DASHBOARD, '/chemistry/hydrolyis_of_cellulose'),
    starch_hydrolyzate: path(ROOTS_DASHBOARD, '/chemistry/starch_hydrolyzate'),
    hydrolyzed_ethyl_bromide: path(ROOTS_DASHBOARD, '/chemistry/hydrolyzed_ethyl_bromide')
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};

export const PATH_DOCS = 'https://gdvietnam.com';
