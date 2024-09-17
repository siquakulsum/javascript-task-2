function searchPlant() {
    let input = document.getElementById('searchInput').value.toLowerCase(); 
    let plants = document.getElementById('plantList').getElementsByTagName('li'); 
    
    for (let i = 0; i < plants.length; i++) {
        let plant = plants[i].innerText.toLowerCase(); 
        
        if (plant.includes(input)) {
            plants[i].classList.remove('hidden'); 
        } else {
            plants[i].classList.add('hidden'); 
        }
    }
}
