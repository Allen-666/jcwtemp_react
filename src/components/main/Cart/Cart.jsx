import React, { Fragment, Component } from "react";
import Ticket from '@/components/layout/cartTicket/Ticket'
import Text from '@/components/layout/show3/show3'

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <Fragment>
                <Ticket></Ticket>
            </Fragment>
        )
    }
}
export default Cart