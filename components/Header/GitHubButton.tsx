// components/GitHubButton.tsx
import React from 'react';

const GitHubButton: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
            <a href="https://github.com/Maakaf/maakaf-website" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <span>כנסו אלינו ל-GitHub</span>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width={32} height={32} />
            </a>
        </div>
    );
};

export default GitHubButton;