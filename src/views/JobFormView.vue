<template>
  <div>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-row">
        <div class="form-field">
          <input id="title" name="title" type="text" placeholder="Job Title" class="form-input" required />
        </div>

        <div class="form-field">
          <input id="location" name="location" type="text" placeholder="Location" class="form-input" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-field">
          <input id="company_name" name="company_name" type="text" placeholder="Company Name" class="form-input" required />
        </div>

        <div class="form-field">
          <input id="company_email" name="company_email" type="email" placeholder="Company Email" class="form-input" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-field">
          <input id="url" name="url" type="url" placeholder="URL" class="form-input" required />
        </div>

        <div class="form-field">
          <input id="tags" name="tags" type="text" placeholder="Tags" class="form-input" required />
        </div>
      </div>

      <div class="form-field">
        <textarea id="description" name="description" rows="6" placeholder="Description" class="form-input" required></textarea>
      </div>

      <div class="form-row">
        <div class="form-field">
          <select id="status" name="status" placeholder="Status">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div class="form-field toggle-field">
          <div class="toggle-container">
            <input id="remote" name="remote" type="checkbox" class="toggle-input" />
            <label for="remote" class="toggle-label">Remote</label>
          </div>
        </div>
      </div>

      <div class="form-field">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
  
  <script>
  export default {
    methods: {
      submitForm() {
         // Get form input values
      const title = document.getElementById('title').value;
      const location = document.getElementById('location').value;
      const company_name = document.getElementById('company_name').value;
      const company_email = document.getElementById('company_email').value;
      const url = document.getElementById('url').value;
      const tags = document.getElementById('tags').value;
      const description = document.getElementById('description').value;

      // Create an object with the form data
      const formData = {
        title,
        location,
        company_name,
        company_email,
        url,
        tags,
        description,
      };

      fetch('http://127.0.0.1:8000/api/listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the REST endpoint
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error(error);
        });
      },
    },
  };
  </script>
  
  <style>

.form-input,
  textarea {
    background-color: #f7f7f7;
    border: 1px solid #f7f7f7;
    border-radius: 0;
    padding: 12px 25px;
    transition: all 0.6s;
    width: 100%;
    box-sizing: border-box;
  }

  .form-input:hover,
  textarea:hover {
    border-color: #677385;
    border-top-color: rgb(103, 115, 133);
    border-right-color: rgb(103, 115, 133);
    border-bottom-color: rgb(103, 115, 133);
    border-left-color: rgb(103, 115, 133);
    box-shadow: none;
    outline: none;
  }

  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-input {
    background-color: #f7f7f7;
    border: 1px solid #f7f7f7;
    border-radius: 0;
    padding: 12px 25px;
    transition: all .6s;
  }

  .form-input:hover{
    border-color: #677385;
    border-top-color: rgb(103, 115, 133);
    border-right-color: rgb(103, 115, 133);
    border-bottom-color: rgb(103, 115, 133);
    border-left-color: rgb(103, 115, 133);
    box-shadow: none;
    outline: none;
  }

  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
  }
  
  .form-field {
    flex-basis: 48%;
    margin-bottom: 1rem;
  }
  
  .toggle-field {
    display: flex;
    align-items: center;
  }
  
  .toggle-container {
    position: relative;
    width: 40px;
    height: 20px;
  }
  
  .toggle-input {
    display: none;
  }
  
  .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d2d6dc;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .toggle-label::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
  }
  
  .toggle-input:checked + .toggle-label {
    background-color: #4299e1;
  }
  
  .toggle-input:checked + .toggle-label::after {
    transform: translateX(20px);
  }

  .form-input::placeholder,
  textarea::placeholder {
    color: #999999;
    font-style: italic;
  }
  
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    min-height: 150px;
  }
  
  button {
    background-color: #4a90e2;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  