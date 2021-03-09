
class BlacklistedIndividual{
  constructor(inputText,blacklistedIndividualId){
    this.inputText= inputText
    this.blacklistedIndividualId = blacklistedIndividualId
  }
}


class Blacklist{
  constructor() {
    this.blacklistDataArray=[]
  }

  renderTopMenu(buttonText){
    const addButton = document.createElement("BUTTON")
    addButton.innerHTML= `${buttonText} `
    document.body.appendChild(addButton)

    const blacklistInput = document.createElement("INPUT")
    document.body.appendChild(blacklistInput)

    addButton.addEventListener('click', () => this.blacklistDataArray.push(new BlacklistedIndividual (blacklistInput.value, Date.now())))

  }
}


let blacklist1 = new Blacklist()
blacklist1.renderTopMenu("Add to blacklist")



//@TODO find better ID generator, altho this shlould be sufficient for this project
//@note pamiętać, że || zwraca wartość jeżeli piersza jest falsy, do sprawdzenia czy tablica z danymi jest pobrana z localstorage
