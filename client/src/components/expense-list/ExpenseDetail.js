import React, {
    Component
} from "react";
import ExpenseIcon from "./ExpenseIcon";
export default class ExpenseDetail extends Component {
    formatDate(date) {
        const dateParts = date.split("-");
        return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    }
render() {return ( liclassName = ExpenseIconcategory = {this:props.expense.category}>
            <span className = "mdc-list-item__text" > {
                this.props.expense.category
            } <span className = "mdc-list-item__text__secondary" > {
                this.formatDate(this.props.expense.date)} 
                { this.props.expense.description ?
                    ` ${this.props.expense.description.replace(/^(.{14}).+/, "$1…")}` :
                    ""
            } </span> </span> <span className = "mdc-list-item__end-detail" >
            $ {
                this.props.expense.amount
            } </span>
            <ul/>
);
                   }
}
