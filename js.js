
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

  renderCurrentBlacklist(){
    const list = document.createElement("ul")
    document.body.appendChild(list)
    this.blacklistDataArray.map((listElement, index)=>{
      const blacklistElement = document.createElement("li")
      blacklistElement.innerHTML= listElement.inputText
      list.appendChild(blacklistElement)
    })
  }

  renderBlacklistEntryInterface(buttonText){
    const addButton = document.createElement("BUTTON")
    addButton.innerHTML= `${buttonText} `
    document.body.appendChild(addButton)

    const blacklistInput = document.createElement("INPUT")
    document.body.appendChild(blacklistInput)

    addButton.addEventListener('click', () => {
      this.blacklistDataArray.push(new BlacklistedIndividual (blacklistInput.value, Date.now()))
      console.log(this.blacklistDataArray)
      this.renderCurrentBlacklist()
    })
  }

}


let blacklist1 = new Blacklist()
blacklist1.renderBlacklistEntryInterface("Add to blacklist")



//@TODO find better ID generator, altho this shlould be sufficient for this project, change name of renderTopMenu to somethig more fitting
//@note pamiętać, że || zwraca wartość jeżeli piersza jest falsy, do sprawdzenia czy tablica z danymi jest pobrana z localstorage
