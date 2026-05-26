export type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuIntro =
  "Scopri le ricche tradizioni culinarie dell'osteria pugliese a Milano al Frisà Bistrò. Piatti autentici preparati con cura, dal pesce alle proposte di terra.";

export const menuCategories: MenuCategory[] = [
  {
    id: "frise",
    title: "Le nostre frise",
    items: [
      {
        name: "Frisa classica",
        description:
          "Pomodorini pachino, capperi, cipolla, acciughe sott'olio, rucola, olio evo",
        price: 7,
      },
      {
        name: "Frisa di terra",
        description:
          "Pomodorini pachino, insalata verde, cime di rapa, conserve sott'olio, cipolla, rucola, olio evo",
        price: 12,
      },
      {
        name: "Frisa allo scoglio",
        description:
          "Pomodorini pachino, mazzancolle, cozze, vongole, totani, calamari, rucola, olio evo",
        price: 16,
      },
      {
        name: "Frisa ortolana",
        description:
          "Salsiccia di maiale, cicorie, fonduta ai formaggi, cipolla, rucola, olio evo",
        price: 13,
      },
      {
        name: "Frisa bistrò",
        description:
          "Pomodorini pachino, burrata di stracciatella, mandorle, rucola, olio evo",
        price: 12,
      },
      {
        name: "Frisa Lecce Milano",
        description:
          "Salsiccia di maiale, cicorie, fonduta ai formaggi allo zafferano, funghi, cipolla, rucola, olio evo",
        price: 14,
      },
    ],
  },
  {
    id: "biscotti",
    title: "I biscotti di frisa",
    items: [
      {
        name: "Biscotto vegetariano",
        description:
          "Granella di frisa, conserve sott'olio, cime di rapa, capperi, fonduta di formaggi e rucola",
        price: 12,
      },
      {
        name: "Biscotto tricolore",
        description:
          "Granella di frisa, mazzancolle al naturale, salmone affumicato, crema al basilico, rucola",
        price: 15,
      },
      {
        name: "Biscotto affumicato",
        description: "Granella di frisa, salmone affumicato, salsa rashall, rucola",
        price: 14,
      },
    ],
  },
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      { name: "Tagliere di salumi e formaggi", price: 16 },
      {
        name: "Antipasto alla contadina",
        description:
          "Peperoni alla leccese, pomodori secchi, lampascioni, melanzane alla mulignana, olive leccino, funghi trifolati, carciofini alla romana, capocollo e cipolla al negroamaro",
        price: 10,
      },
    ],
  },
  {
    id: "frittini",
    title: "Frittini",
    items: [
      { name: "Olive ascolana", price: 6 },
      { name: "Crocchette di patate", price: 5 },
      { name: "Pittule", price: 5 },
    ],
  },
  {
    id: "insalatone",
    title: "Insalatone",
    items: [
      {
        name: "Salentina",
        description:
          "Insalata verde, patate, carciofini, olive, pomodorini pachino e cipolla rossa",
        price: 10,
      },
      {
        name: "Grecanica",
        description:
          "Insalata verde, tonno, primosale, pomodorini pachino e cipolla rossa",
        price: 12,
      },
      {
        name: "Salmone",
        description:
          "Insalata verde, salmone affumicato, primosale, pomodorini pachino e cipolla rossa",
        price: 15,
      },
      {
        name: "Contadina",
        description:
          "Insalata verde, pollo alla piastra, primosale, pomodorini pachino e cipolla rossa",
        price: 13,
      },
    ],
  },
  {
    id: "primi-terra",
    title: "Primi di terra",
    items: [
      { name: "Orecchiette alle cime di rapa e acciughe", price: 12 },
      { name: "Orecchiette al sugo pugliese", price: 10 },
      { name: "Orecchiette al ragù e polpette di manzo", price: 14 },
      { name: "Pappardelle ai funghi porcini e ragù di cinghiale", price: 16 },
      { name: "Cacio e pepe", price: 12 },
      {
        name: "Ciceri e tria",
        description:
          "Piatto della tradizione pugliese: pasta fritta nell'olio d'oliva e lessata insieme ai ceci",
        price: 13,
      },
      { name: "Parmigiana", price: 12 },
      { name: "Carbonara", price: 14 },
    ],
  },
  {
    id: "primi-mare",
    title: "Primi di mare",
    items: [
      { name: "Orecchiette alle cime di rapa e vongole", price: 16 },
      { name: "Sagne con baccalà, pomodorini e funghi", price: 16 },
      { name: "Cacio e pepe con tartare di gamberi", price: 16 },
      {
        name: "Tagliolini al nero di seppia, stracciatella e tartare di mazzancolle",
        price: 18,
      },
      { name: "Pasta zucchine, gamberetti e zafferano", price: 14 },
      { name: "Tagliolini allo scoglio", price: 16 },
      {
        name: "Tagliolini con cozze, ceci, pomodorini e primosale",
        price: 13,
      },
    ],
  },
  {
    id: "secondi-terra",
    title: "Secondi di terra",
    items: [
      { name: "Tartare di bovino adulto", price: 16 },
      {
        name: "Tagliata di magatello con rucola e primosale",
        price: 22,
      },
      { name: "Bombette pugliesi con patate alla piastra", price: 16 },
      { name: "Braciole al sugo pugliese", price: 14 },
      {
        name: "Filetto di maialetto con fonduta di formaggi allo zafferano",
        price: 14,
      },
      { name: "Polpette di manzo al sugo", price: 12 },
      { name: "Bistecca di manzo ai ferri", price: 14 },
      { name: "Arrosto ai funghi trifolati e negroamaro", price: 14 },
      { name: "Gran mix di carne (x2 persone)", price: 45 },
      { name: "Pezzetti di manzo al sugo", price: 14 },
      {
        name: "Purea di fave verdi con cicorie e olive leccino",
        price: 10,
      },
      {
        name: "Muersi fritti",
        description: "Fagioli cannellini, cime di rapa piccanti e pane fritto",
        price: 10,
      },
    ],
  },
  {
    id: "secondi-mare",
    title: "Secondi di mare",
    items: [
      { name: "Parmigiana di mare", price: 14 },
      { name: "Polpo in pignata", price: 20 },
      { name: "Frittura mista di gamberi e calamari", price: 16 },
      { name: "Trancio di spada alla gallipolina", price: 16 },
      {
        name: "Purea di fave verdi con cicorie e baccalà fritto",
        price: 16,
      },
      { name: "Filetto di orata alla otrantina", price: 16 },
    ],
  },
];
