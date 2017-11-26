import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import Drinks from '../../components/drinks/Drinks';
import SyrupSelection from '../../components/syrupSelection/SyrupSelection';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import Proportions from '../../components/proportions/Proportions';
import alcohol from '../../data/alcohol';
import softDrinks from '../../data/softDrinks';
import syrups from '../../data/syrups';
import './drinkMixing.css'

class DrinkMixing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAlcohol: '',
            selectedDrink: '',
            alcoholAmount: 50,
            softAmount: 50,
            selectedSyrup: '',
            canProceed: false,
            canBack: false,
            currentStep: 0,
        }
    }

    handleProportions = (type) => {
        const {alcoholAmount, softAmount} = this.state;
        const amount = 10;
        if (type === 'alcohol' && alcoholAmount < 90) {
          const increasedAmount = alcoholAmount + amount;
          const decreasedAmount = softAmount - amount;
          this.setState({
              alcoholAmount: increasedAmount,
              softAmount: decreasedAmount,
          })
        } else if (type === 'soft' && softAmount < 90 ) {
            const increasedAmount = softAmount + amount;
            const decreasedAmount = alcoholAmount - amount;
            this.setState({
                alcoholAmount: decreasedAmount,
                softAmount: increasedAmount,
            })
        }
    };

    handleStep = (value) => {
        const {currentStep} = this.state;
        const newStep = currentStep + value;
        this.setState({
            currentStep: newStep,
        });
    };

    handleAlcohol = (alcohol) => {
        const { canProceed, selectedAlcohol } = this.state;
        this.setState({
            canProceed: !canProceed
        });
        if(alcohol !== selectedAlcohol) {
            this.setState({
                selectedAlcohol: alcohol
            });
        } else {
            this.setState({
                selectedAlcohol: ''
            });
        }
    };

    handleDrink = (drink) => {
        const { canBack, selectedDrink } = this.state;
        this.setState({
            canBack: !canBack
        });
        if(drink !== selectedDrink) {
            this.setState({
                selectedDrink: drink
            });
        } else {
            this.setState({
                selectedDrink: ''
            });
        }
    };

    handleSyrup = (selectedSyrup) => {
        const { canProceed } = this.state;
        this.setState({
            canProceed: !canProceed
        });
        if(selectedSyrup !== this.state.selectedSyrup) {
            this.setState({
                selectedSyrup: selectedSyrup
            });
        } else {
            this.setState({
                selectedSyrup: ''
            });
        }
    };

    render() {
        const {canProceed, canBack, selectedAlcohol, selectedDrink, selectedSyrup, alcoholAmount, softAmount} = this.state;
        return (
            <div className="bar-container">
                <Drinks
                    onClick={this.handleAlcohol}
                    drink={alcohol}
                    title="Pick an alcohol"
                    canProceed={canProceed}
                    canBack={canBack}
                    selected={selectedAlcohol}
                    buttonText="next"
                    nextOnClick={() => this.handleStep(1)}
                    backOnClick={() => this.handleStep(-1)}
                />
                <Drinks
                    onClick={this.handleDrink}
                    drink={softDrinks}
                    title="What to mix it with?"
                    canProceed={canProceed}
                    canBack={canBack}
                    selected={selectedDrink}
                    buttonText="next"
                    nextOnClick={() => this.handleStep(1)}
                    backOnClick={() => this.handleStep(-1)}
                />
                <Proportions
                    alcohol={'beer'}
                    alcoholAmount={alcoholAmount}
                    soft={'energy drink'}
                    softAmount={softAmount}
                    buttonText="next"
                    nextOnClick={() => this.handleStep(1)}
                    backOnClick={() => this.handleStep(-1)}
                    alcoholIncrease={() => this.handleProportions("alcohol")}
                    softIncrease={() => this.handleProportions("soft")}
                />
                <SyrupSelection
                    title="Add Syrup"
                    onClick={this.handleSyrup}
                    syrups={syrups}
                    canProceed={canProceed}
                    canBack={canBack}
                    selected={selectedSyrup}
                    buttonText="back"
                    nextOnClick={() => this.handleStep(1)}
                    backOnClick={() => this.handleStep(-1)}
                />
                <ScreenTitle title="Finishing touch!" />
                <NavigationLink
                    linkText = 'Serve your drink!'
                    destination = ''
                />
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

export default DrinkMixing;