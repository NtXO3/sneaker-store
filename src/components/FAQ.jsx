import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQ = () => {
    const [openAccordion, setOpenAccordion] = useState('')

    return (
        <section id="faq">
            <div className="container">
                <div className="row">
                    <h1 className="section__title">Veelgestelde <span className="orange">Vragen</span></h1>
                    <div className="accordion">
                        <FAQItem header={'Het product voldoet niet naar mijn verwachtingen'} body={`Ben je niet tevreden met jouw aankoop. Dan kun je deze binnen 30 dagen na aankoop retourneren. Ga naar Mijn Account en maak een retour aan.
                            Heb je nog geen account? Maak het gratis aan of vul het retourformulier in die bijgeleverd is met jouw aankoop.`} 
                        />
                        <FAQItem header={'Het product past niet'} body={`Passen je sneakers of kleding niet? Dan kun je deze binnen 30 dagen na aankoop retourneren. Ga naar Mijn Account, maak een retour aan.`} 
                        />
                        <FAQItem header={'Ik heb het verkeerde product ontvangen'} body={`Heb jij per ongeluk het verkeerde product ontvangen? Neem dan contact op met onze klantenservice, dan zorgen zij ervoor dat het product gratis retour kan via een label die je van ons krijgt.
                            Let op! Zorg er wel voor dat je binnen 30 dagen na ontvangst aangeeft dat je wil retourneren.`} 
                        />
                        <FAQItem header={'Ik wil graag mijn aankoop ruilen'} body={`Het direct omruilen van een artikel is helaas niet mogelijk. Om het gewenste artikel te ontvangen kun je een nieuwe bestelling plaatsen en de andere aan ons retourneren.`} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
