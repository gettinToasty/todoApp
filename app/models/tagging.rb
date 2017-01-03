# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  todo_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :tag, :todo, presence: true
  validates :tag, uniqueness: { scope: :todo }

  belongs_to :tag

  belongs_to :todo
end
