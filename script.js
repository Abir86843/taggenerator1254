function generateTags() {
    const videoTitle = document.getElementById('videoTitle').value.toLowerCase();
    if (!videoTitle) return;

    // Split the title into words
    const words = videoTitle.split(' ');
    const tags = new Set();

    // Generate individual word tags
    words.forEach(word => {
        if (word.length > 2) {
            tags.add(word);
            // Add common prefixes
            tags.add(`best ${word}`);
            tags.add(`top ${word}`);
            tags.add(`${word} tutorial`);
            tags.add(`${word} guide`);
            tags.add(`${word} tips`);
            tags.add(`${word} for beginners`);
            tags.add(`${word} 2024`);
            tags.add(`${word} how to`);
            tags.add(`learn ${word}`);
            tags.add(`${word} basics`);
            tags.add(`${word} explained`);
            tags.add(`${word} course`);
            tags.add(`${word} lessons`);
            tags.add(`${word} tricks`);
            tags.add(`${word} hacks`);
            tags.add(`${word} tutorial 2024`);
            tags.add(`${word} for dummies`);
            tags.add(`${word} masterclass`);
            tags.add(`${word} step by step`);
            tags.add(`${word} advanced`);
        }
    });

    // Generate combination tags
    for (let i = 0; i < words.length - 1; i++) {
        const twoWords = words[i] + ' ' + words[i + 1];
        tags.add(twoWords);
        tags.add(`how to ${twoWords}`);
        tags.add(`${twoWords} tutorial`);
        tags.add(`${twoWords} guide`);
        tags.add(`learn ${twoWords}`);
        tags.add(`${twoWords} 2024`);
    }

    // Add three-word combinations if available
    for (let i = 0; i < words.length - 2; i++) {
        tags.add(words[i] + ' ' + words[i + 1] + ' ' + words[i + 2]);
    }

    // Add common YouTube-related tags
    const commonTags = [
        'video', 'youtube', 'tutorial', 'how to', 'guide',
        'tips and tricks', 'learn', 'education', 'course',
        'beginners', 'advanced', 'tutorial 2024', 'masterclass',
        'step by step guide', 'tips', 'tricks', 'hacks',
        'how to guide', 'basics', 'fundamentals', 'lessons',
        'explained', 'for beginners', 'quick guide', 'easy tutorial',
        'professional', 'expert tips', 'best practices'
    ];

    commonTags.forEach(tag => tags.add(tag));
    tags.add(videoTitle);

    // Add some quality indicators
    const qualities = ['best', 'top', 'ultimate', 'complete', 'essential', 'professional'];
    qualities.forEach(quality => {
        tags.add(`${quality} ${videoTitle}`);
    });

    // Convert tags to array and limit to 200 items
    const tagsArray = Array.from(tags);
    const limitedTags = tagsArray.slice(0, 200);

    displayTags(limitedTags);
}

function displayTags(tags) {
    const tagsContainer = document.getElementById('tagsContainer');
    const tagsList = document.getElementById('tagsList');
    
    // Clear previous tags
    tagsContainer.innerHTML = '';
    
    // Display individual tags
    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagElement.onclick = () => removeTag(tagElement);
        tagsContainer.appendChild(tagElement);
    });

    // Update textarea with all tags
    tagsList.value = tags.join(', ');
}

function removeTag(tagElement) {
    tagElement.remove();
    updateTagsList();
}

function updateTagsList() {
    const tags = Array.from(document.getElementsByClassName('tag'))
        .map(tag => tag.textContent);
    document.getElementById('tagsList').value = tags.join(', ');
}

function copyTags() {
    const tagsList = document.getElementById('tagsList');
    tagsList.select();
    document.execCommand('copy');
    
    // Visual feedback
    const button = document.querySelector('.copy-section button');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
} 
