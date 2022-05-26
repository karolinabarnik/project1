import React from "react";
import '../../Styles/BlocContent.css';
import BlocFirst from "./BlocFirst";

const content = [
    {   
        id: 1,
        title: "Consulting",
        text: 'A pragmatic approach and assumed recommendations for all your project farming topics, techno choice, performance...',
        offer: "Consulting",

    },
    {   
        id: 2,
        title: "UX/UI",
        text: "Design your digital platforms by integrating the real needs of your users: design thinking, sprint design, user tracking...",
        offer: " UX/UI",

    },
    {   
        id: 3,
        title: "Development",
        text: "Agile management, stable teams and an involved PO to succeed together in your time to market & technical quality challenges.",
        offer: "development",
    },
    {   
        id: 4,
        title: "Run",
        text: "Boost your digital ecosystem over the long term: performance, scalability, audience and user acquisition.",
        offer: "run",
    },
    {   
        id: 5,
        title: "Hosting",
        text: "A single point of contact and a commitment to global performance for your digitak applications.",
        offer: "hosting",
    },
    {   
        id: 6,
        title: "Training",
        text: "Training to support you in digital transformation. Kaliop is a certified datadock consultatnt trainer to coach your talents.",
        offer: "training",
    },
]

const BlocContent = () => {
   
    const blocs = content.map(bloc => (
        <BlocFirst key={bloc.id} {...bloc} />
    )) 

return (
    <section class="offers-second">
        <div class="container">
            <div class="container-inner5">
                <div class="blocs-overlay">
                    {blocs}
                </div>
            </div>
        </div>
    </section>
)
};

export default BlocContent;
   

