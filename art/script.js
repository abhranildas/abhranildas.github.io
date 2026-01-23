document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('close-btn');
    
    // Lightbox elements
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lightbox-title');
    const lbDate = document.getElementById('lightbox-date');
    const lbDesc = document.getElementById('lightbox-desc');


    // 1. Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            // --- NEW: SORT BY DATE (DESCENDING) ---
            data.sort((a, b) => {
                // Convert date strings to Date objects to compare them
                return new Date(b.date) - new Date(a.date);
            });
            // --------------------------------------

            // 2. Loop through data and create tiles
            data.forEach(artPiece => {
                const item = document.createElement('div');
                item.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = artPiece.filename;
                img.alt = artPiece.title;
                
                // Add click event to open lightbox
                item.addEventListener('click', () => {
                    openLightbox(artPiece);
                });

                item.appendChild(img);
                galleryContainer.appendChild(item);
            });
        })
        .catch(error => console.error('Error loading gallery data:', error));

    // 3. Function to open lightbox
    function openLightbox(data) {
        // 1. Set the content
        lbImg.src = data.filename;
        lbTitle.textContent = data.title;
        lbDesc.textContent = data.description;
        
        // 2. Format the date
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dateParts = data.date.split('-');
        const year = dateParts[0];
        const monthIndex = parseInt(dateParts[1]) - 1; 
        const day = parseInt(dateParts[2]);
        lbDate.textContent = `${year} ${months[monthIndex]} ${day}`;

        // 3. REMOVED: The logic that checked width/height is gone.
        // We now trust the CSS to put the caption on the right for laptops.

        // 4. Show the modal
        lightbox.classList.add('active');
    }

    // 4. Close Lightbox Logic
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close when clicking outside the image content (on the black background)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});