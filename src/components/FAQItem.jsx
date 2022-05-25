import React from 'react';

const FAQItem = ({ header, body}) => {
    const accordionToggle = (e) => {
        e.target.classList.toggle('active')
        const accordionBody = e.target.nextElementSibling
        if (e.target.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
        }
        else {
            accordionBody.style.maxHeight = 0
        }
    }

    return (
        <div className="accordion__item">
            <div className="accordion__header" onClick={accordionToggle}>
                {header}
            </div>
            <div className="accordion__body">
                <p className="accordion__body--text">
                    {body}
                </p>
            </div>
        </div>
    );
}

export default FAQItem;
