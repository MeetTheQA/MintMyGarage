// FeaturedIdeas.js
import React from 'react';
import { useAppContext } from './Contexts\AppContext.js';

const FeaturedIdeas = () => {
    const { basename } = useAppContext();
    // Example data for featured ideas
    const featuredIdeas = [
        { id: 1, title: 'Modern Garage Makeover', description: 'Transform your garage into a sleek and modern space.' },
        { id: 2, title: 'Rustic Workshop Design', description: 'Create a cozy workshop atmosphere with rustic elements.' },
        { id: 3, title: 'Car Enthusiast Paradise', description: 'Design a garage that caters to car enthusiasts with style.' },
        // Add more ideas as needed
    ];

    return (
        <section className="featured-ideas-section">
            <h2>Featured Garage Renovation Ideas</h2>

            <div className="idea-carousel">
            <p>FeaturedIdeas Component - Basename: {basename}</p>
                {featuredIdeas.map((idea) => (
                    <div key={idea.id} className="idea-card">
                        <h3>{idea.title}</h3>
                        <p>{idea.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedIdeas;
