document.getElementById('year').textContent = new Date().getFullYear();

// Filter functionality
document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const seasons = Array.from(document.querySelectorAll('input[name="season"]:checked')).map(cb => cb.value);
    const scents = Array.from(document.querySelectorAll('input[name="scent"]:checked')).map(cb => cb.value);
    const releases = Array.from(document.querySelectorAll('input[name="release"]:checked')).map(cb => cb.value);
    
    document.querySelectorAll('.product-card').forEach(card => {
      const cardSeasons = card.dataset.season.split(',');
      const cardScents = card.dataset.scent.split(',');
      const cardRelease = card.dataset.release;
      
      const seasonMatch = seasons.length === 0 || seasons.some(s => cardSeasons.includes(s));
      const scentMatch = scents.length === 0 || scents.some(s => cardScents.includes(s));
      const releaseMatch = releases.length === 0 || releases.includes(cardRelease);
      
      card.style.display = seasonMatch && scentMatch && releaseMatch ? 'block' : 'none';
    });
  });
});

// Signature Scent Tool (placeholder)
document.getElementById('signature-scent-btn').addEventListener('click', () => {
  alert('Answer a few questions to find your signature scent!\n1. Preferred occasion? (e.g., Daily, Evening)\n2. Favorite scent family? (e.g., Woody, Citrus)\n3. Season? (e.g., Summer, Winter)\n\nThis feature is under development.');
});