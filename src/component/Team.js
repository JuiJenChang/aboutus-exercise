import React from 'react';
import './Team.css';
import Allan from './teammate/Allan';
import Wang from './teammate/Wang';
import Joe from './teammate/Joe';

function Team() {

    return (
        <section className="team">
            <h4>核心成員</h4>
            <div className="teammate">
                <Allan />
                <Wang />
                <Joe />
            </div>
        </section>
    );
}

export default Team;