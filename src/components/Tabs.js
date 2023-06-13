import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
    //Created [Your, all, blocked] cards tabs.
    return (
        <div className="tabs">
            <button
                className={activeTab === 'Your' ? 'active' : ''}
                onClick={() => onTabChange('Your')}
            >
                Your Cards
            </button>
            <button
                className={activeTab === 'all' ? 'active' : ''}
                onClick={() => onTabChange('all')}
            >
                All Cards
            </button>
            <button
                className={activeTab === 'blocked' ? 'active' : ''}
                onClick={() => onTabChange('blocked')}
            >
                Blocked Cards
            </button>
        </div>
    );
};

export default Tabs;
