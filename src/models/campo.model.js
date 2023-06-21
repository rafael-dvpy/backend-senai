// Classe para representar um campo esportivo
export class Campo {
    constructor(id, name, sports, location, openingHours, createdBy, editedBy = null) {
      this.id = id;
      this.name = name;
      this.sports = sports;
      this.location = location;
      this.openingHours = openingHours;
      this.createdBy = createdBy;
      this.editedBy = editedBy;
      this.createdAt = Date.now();
      this.updatedAt = Date.now();
    }
  }
  