
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

  deleteElement(){
    console.log("function called")
  }
  

  renderCurrentBlacklist(){
    const list = document.createElement("ul")
    document.body.appendChild(list)
    this.blacklistDataArray.map((listElement, index)=>{
      const blacklistElement = document.createElement("li")
      const blacklistElementDeleteButton = document.createElement("button")
      blacklistElementDeleteButton.innerHTML = "Delete element"
      blacklistElement.innerHTML= listElement.inputText
      list.appendChild(blacklistElement)
      list.appendChild(blacklistElementDeleteButton)
      

      blacklistElementDeleteButton.addEventListener("click", ()=>{
        console.log(listElement.blacklistedIndividualId)
      })
      blacklistElementDeleteButton.addEventListener("click", ()=>{
        this.deleteElement()
      })
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
      console.log(this.blacklistDataArray) //@TODO Delete this later, created for state check purposes
      this.render()
    })
  }


  render(){
    document.body.innerHTML= ""
    this.renderBlacklistEntryInterface("Add to blacklist")
    this.renderCurrentBlacklist()
  }

}


let blacklist1 = new Blacklist()
blacklist1.render()



//@TODO find better ID generator, altho this shlould be sufficient for this project
//@note pamiętać, że || zwraca wartość jeżeli piersza jest falsy, do sprawdzenia czy tablica z danymi jest pobrana z localstorage
