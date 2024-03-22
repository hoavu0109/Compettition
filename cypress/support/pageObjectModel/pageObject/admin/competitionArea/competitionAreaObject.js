import competitionAreaTab from "../../../locator/admin/competitionAreaTab";
class CompetitionAreaObject{
    competitionArea(){
        return cy.get(competitionAreaTab.competitionArea).eq(1)
    }
}
const competitionAreaObject = new  CompetitionAreaObject();
export  default competitionAreaObject