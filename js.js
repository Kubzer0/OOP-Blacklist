
class BlacklistedIndividual{
  constructor(inputText, inputPhoneNumber,blacklistedIndividualId){
    this.inputText = inputText
    this.inputPhoneNumber = inputPhoneNumber
    this.blacklistedIndividualId = blacklistedIndividualId
  }
}


class Blacklist{
  constructor() {
    this.blacklistDataArray = []
    this.selectedElement = []
  }

  deleteElement(){
    console.log(this.selectedElement) //delete later
    this.blacklistDataArray.map((listElement, index)=>{
      if (listElement.blacklistedIndividualId == this.selectedElement) {
        this.blacklistDataArray.splice(index,1)
      }
    })
    this.render()
  }

  searchByInputs(blacklistInput,phoneNumberInput){
    const filteredBlacklistDataArray = this.blacklistDataArray.filter((listElement) => listElement.inputText === blacklistInput || listElement.inputPhoneNumber === phoneNumberInput ) //@TOD block emty field entires 
    document.body.innerHTML= ""
    this.renderBlacklistEntryInterface("Add to blacklist")
    this.renderBlacklist(filteredBlacklistDataArray)
    console.log(filteredBlacklistDataArray)
  }
  

  renderBlacklist(dataArray){ 
    const currentDataArrayRender = dataArray || this.blacklistDataArray
    const list = document.createElement("ul")
    document.body.appendChild(list)
    currentDataArrayRender.map((listElement, index)=>{
      const blacklistElement = document.createElement("li")
      const blacklistElementDeleteButton = document.createElement("button")
      blacklistElementDeleteButton.innerHTML = "Delete element"
      blacklistElement.innerHTML= listElement.inputText + " "+ listElement.inputPhoneNumber
      list.appendChild(blacklistElement)
      list.appendChild(blacklistElementDeleteButton)
      

      blacklistElementDeleteButton.addEventListener("click", ()=>{
        this.selectedElement = listElement.blacklistedIndividualId
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

    const phoneNumberInput = document.createElement("INPUT")
    document.body.appendChild(phoneNumberInput)

    addButton.addEventListener('click', () => {
      this.blacklistDataArray.push(new BlacklistedIndividual (blacklistInput.value, phoneNumberInput.value, Date.now()))
      console.log(this.blacklistDataArray) //@TODO Delete this later, created for state check purposes
      this.render()
    })

    const searchButton = document.createElement("BUTTON")
    searchButton.innerHTML= `Search`
    document.body.appendChild(searchButton)

    searchButton.addEventListener('click', ()=>{
      this.searchByInputs(blacklistInput.value, phoneNumberInput.value) 
    })

  }


  render(){
    document.body.innerHTML= ""
    this.renderBlacklistEntryInterface("Add to blacklist")
    this.renderBlacklist()
  }

}


let blacklist1 = new Blacklist()
blacklist1.render()



//@TODO find better ID generator, altho this shlould be sufficient for this project
//@note pamiętać, że || zwraca wartość jeżeli piersza jest falsy, do sprawdzenia czy tablica z danymi jest pobrana z localstorage
