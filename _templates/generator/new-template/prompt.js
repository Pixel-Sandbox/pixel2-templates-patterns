module.exports = [
  {
    type: 'select',
    name: 'product',
    message: 'Select product :',
    initial: 0,
    choices: ['jurnal', 'klikpajak', 'talenta', 'qontak', 'backyard', 'insight', 'mekari-account', 'mekari-partners', 'layout'],
  },
  {
    type: 'input',
    name: 'name',
    message: "Enter template name:"
  },
  {
    type: 'input',
    name: 'author',
    message: "Enter template author:"
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: "Enter template author's email:"
  }
]
