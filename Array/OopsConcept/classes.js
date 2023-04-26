class BridgeLabz {
    constructor(name, comapanyName, deployment) {
        this.name = name;
        this.comapanyName = comapanyName;
        this.deployment = deployment
        this.deploymentDate = "No"
    }
    interaction(date) {
        return this.deploymentDate = date
    }
}
let student = new BridgeLabz("Sidhodhan", "spealba", "Not till")
console.log(student.interaction("10 may"))