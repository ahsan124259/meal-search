 const loadMeals=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals));
 }

 const displayMeals=(meals)=>{
    const mealsContainer=document.getElementById('meal-container')
    mealsContainer.innerHTML='';
    meals.forEach(meal => {
        const mealDiv=document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
           <div class="card">
                    <img src=${meal.strMealThumb} alt="" srcset="" >
                   <div>
                   <h1>${meal.strMeal}</h1>
                   <p>${meal.strInstructions.slice(0,200)}</p>
                   <p>$<span>500</span></p>

                   </div>
                
                </div>
        `;
        mealsContainer.appendChild(mealDiv)
    });

 }
 const searchFood=()=>{
    const searchField=document.getElementById('search-field');
   
    const searchText=searchField.value ;
    loadMeals(searchText)
    searchField.value='';


 }
 loadMeals('')