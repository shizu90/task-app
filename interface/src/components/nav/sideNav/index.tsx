import { SideNavStyle } from "./style";
import { Export } from "phosphor-react";

export function SideNavbar() {
    return (
        <SideNavStyle>
            <button className="group">
                <Export size={26}/>
                Export to csv
            </button>
            <button className="group">
                <Export size={26}/>
                Export to csv
            </button>
            <button className="group">
                <Export size={26}/>
                Export to csv
            </button>
            <button className="group">
                <Export size={26}/>
                Export to csv
            </button>
            <button className="group">
                <Export size={26}/>
                Export to csv
            </button>
            <button className="group">
                <Export size={26}/>
                Export to csv
            </button>
        </SideNavStyle>
    )
}