import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepNavigation from '../stepNavigation/StepNavigation'
import './decorations.scss'

const Decorations = ({
    nextOnClick,
    backOnClick,
    title,
    canProceed,
    canBack,
}) => {
    const decors = ["olive", "straw", "palm", "lemon", "mint", "flame", "cherry", "??"];
    const decorations = decors.map((element) =>(
        <div>
            <input type="checkbox" id={element} />
            <label for={element}>{element}</label>
        </div>
    ));
    return (
        <div className="decorationsContainer">
            <ScreenTitle title={title} />
            <div className="drinks">
                {decorations}
            </div>
            <StepNavigation
                canBack={canBack}
                canProceed={canProceed}
                nextOnClick={nextOnClick}
                backOnClick={backOnClick}
            />
        </div>
    );
};

export default Decorations;