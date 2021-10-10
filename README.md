# README
## TourManager
This repository is the frontend for the TourManager single-page application. TourManager is designed to help tour managers log and organize their shows, giving them a quick overview of the day to come in a convenient, dynamic way. You may find the backend repository for TourManager [here](https://github.com/Ksamuel92/tourmanagerbackend). You will need to clone both frontend and backend to use the application.

## Prerequisites

Before you continue, make sure you meet the following requirements:

* Ruby 2.6.3 (for tourmanagerbackend)
* Rails 6.1.4 (for tourmanagerbackend)

## Install

### Clone the repository
```
git clone git@github.com:Ksamuel92/tourmanagerfrontend.git
cd tourmanagerfrontend
```
### Install Dependencies (If you wish to use prettier/eslint with the codebase)
```
yarn install  
```
### How To Use TourManager
Once TourManager's [backend](https://github.com/Ksamuel92/tourmanagerbackend) rails server is running, open up index.html from the frontend's repository. You'll see a login modal that looks like this:
//image here
Log in and you'll be taken to your home page, where you can go ahead and create your first show.
//image here
After you create the show, a show card will be rendered to the page, which you can edit or delete.
//image here
Make as many shows as you need. The gross total of your merch and guarantees will be generated for ease. When you log out or refresh the page, you can always get your shows back by using the same email that you logged in with the first time.


## Contributing to TourManager
To contribute to TourManager, follow these steps:

* Fork this repository.
* Create a branch: git checkout -b <branch_name>.
* Make your changes and commit them: git commit -m '<commit_message>'
* Push to the original branch: git push origin tourmanagerfrontend
* Create the pull request.
* Alternatively see the GitHub documentation on creating a pull request.

## Contact

If you would like to contact me, please email ksamuel92@gmail.com

## License

This project uses the following license: MIT License
