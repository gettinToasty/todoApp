# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todos = Todo.create([{title: 'finish full-stack project', body: 'come up with idea first', done: false},
  {title: 'get hired by Google', body: 'I MADE IT', done: true},
  {title: 'save the world', body: 'save the cheerleader', done: false}])
