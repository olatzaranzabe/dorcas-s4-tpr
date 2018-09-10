import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Sub-components/Icon';
import { FormattedMessage } from 'react-intl';

class Navigation extends Component {
    render() {
        console.log('props NAVIGATION', this.props);
        const {
          title1,
          title2,
          title3,
          title4,
          title5,
          dot1,
          dot2,
          dot3, 
          dot4,
          dot5,
          handleClickPreviousStep,
          handleClickFollowingStep,
          handleNextStepClass,
          currentStep
        } = this.props;
      return (
        <div>
            <nav className='navigation-container'>
            <Link to={`/step/${currentStep-1}`}>
            <button className='back-button' onClick={handleClickPreviousStep}>
            <FormattedMessage
              id="Navigation.back"
              defaultMessage="Back"
            />
            </button>
            </Link>
              <ul className='list-steps'>
                <li className='nav-steps'>
                  <Icon state={dot1}/>
                  <p className='nav-label_step'>{title1}</p>
                </li>
                <li className='nav-steps'>
                  <Icon state={dot2}/>
                  <p className='nav-label_step'>{title2}</p>
                </li>
                <li className='nav-steps'>
                  <Icon state={dot3}/>
                  <p className='nav-label_step'>{title3}</p>
                </li>
                <li className='nav-steps'>
                  <Icon state={dot4}/>
                  <p className='nav-label_step'>{title4}</p>
                </li>
                <li className='nav-steps'>
                  <Icon state={dot5}/>
                  <p className='nav-label_step'>{title5}</p>
                </li>
              </ul>
              <Link to={`/step/${currentStep + 1}`}>
              <button className='next-button' onClick={handleClickFollowingStep}>
              <FormattedMessage
                id="Navigation.next"
                defaultMessage="Next"
              />
              </button>
              </Link>
              <Link to={`/step/${currentStep+1}`}>
              <p className={handleNextStepClass}>Completar luego Saltar paso</p>
              </Link>
            </nav>  
        </div>
      );
    }
  }

export default Navigation;