function getJson() {
      fetch('https://www.anapioficeandfire.com/api/books?pageSize=30')
        .then(response => response.json())
        .then(data => {
          console.log(data);
        
          const posts = data;
          let output = "";
          posts.forEach(function(post) {
              const date = new Date(post.released).toDateString();
            output += `
            <div class="container">
            <main class="main pt-4">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                <article class="card mb-4">
                <header class="card-header">
                  <div class="card-meta">
                    <a href="#">Author ${post.authors}</a>
                    <a href="#">ISBN ${post.isbn}</a>
                  </div>
                  <a href="#">
                    <h4 class="card-title">${post.name}</h4>
                  </a>
                </header>
                <div class="card-body">
                  <p class="card-text">publisher ${post.publisher}</p>
                  <p class="card-text">Released date ${date}</p>
                  <p class="card-text">No of pages ${post.numberOfPages}</p>
                </div>
              </article>
              </div>
              </div>
            </div>
          </main>
          </div>`;
          });
         document.getElementById("app").innerHTML = output;
         var my = document.getElementById("app");
         var displaySetting = my.style.display;
         var clockButton = document.getElementById('clockButton');
    
          
          if (displaySetting == 'block') {
            // clock is visible. hide it
            my.style.display = 'none';
            // change button text
            clockButton.innerHTML = 'Show data';
          }
          else {
            // clock is hidden. show it
            my.style.display = 'block';
            // change button text
            clockButton.innerHTML = 'Hide data';
          }
        })
        .catch(err => console.log(err));
    }
    
    getJson();