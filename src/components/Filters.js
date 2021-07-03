import React, {useState} from "react";
import TagFilter from "./TagFilter";

const Filters = ({items, setUpdatedItems}) => {
    const [activeFilter, setActiveFilter] = useState('all');

    return(
        <React.Fragment>
            <TagFilter items={items} setItems={setUpdatedItems} activeFilter={activeFilter} setActiveFilter={setActiveFilter} tag={'all'} name={'All'}/>
            <TagFilter items={items} setItems={setUpdatedItems} activeFilter={activeFilter} setActiveFilter={setActiveFilter} tag={'web design'} name={'Web Design'}/>
            <TagFilter items={items} setItems={setUpdatedItems} activeFilter={activeFilter} setActiveFilter={setActiveFilter} tag={'graphic design'} name={'Graphic Design'}/>
            <TagFilter items={items} setItems={setUpdatedItems} activeFilter={activeFilter} setActiveFilter={setActiveFilter} tag={'software dev'} name={'Software Dev'}/>
        </React.Fragment>
    );
}

export default Filters;
