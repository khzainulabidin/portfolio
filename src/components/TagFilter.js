import React from "react";
import styles from './styles/TagFilter.module.scss';

const TagFilter = ({items, setItems, tag, name, activeFilter, setActiveFilter}) => {
    const filter = () => {
        const updatedItems = tag === 'all' ? items : items.filter(item => item.tag === tag);
        setItems(updatedItems);
        setActiveFilter(tag);
    }

    const activeStyle = {
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#FFFFFF',
    }

    return(
        <span
            className={styles.filter}
            onClick={filter}
            style={activeFilter === tag ? activeStyle : {}}
        >
            {name}
        </span>
    );
}

export default TagFilter;