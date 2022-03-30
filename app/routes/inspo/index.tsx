import Dialog from '@reach/dialog'
import Button from '~/components/atoms/button'
import { useState } from 'react'

import Card from '../../components/atoms/card'
import Icon from '../../components/atoms/icon'
import TextButton from '../../components/atoms/text-button'
import Banner from '../../components/molecules/banner'
import CategoryCard from '../../components/molecules/category-card'

export default function Index() {
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false)
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false)

  const openAddAccountModal = () => setIsAddAccountModalOpen(true)
  const closeAddAccountModal = () => setIsAddAccountModalOpen(false)

  const openAddCategoryModal = () => setIsAddCategoryModalOpen(true)
  const closeAddCategoryModal = () => setIsAddCategoryModalOpen(false)

  return (
    <div>
      <Banner>
        <div className="flex items-center">
          <span className="mr-auto">Following</span>
          <TextButton onClick={openAddAccountModal}>Add account</TextButton>
        </div>
      </Banner>
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 justify-center gap-4">
          <CategoryCard
            className="h-full"
            categoryName="All accounts"
            to="category/all"
          />
          <CategoryCard
            className="h-full"
            categoryName="Favs"
            to="category/favorites"
          />
          <CategoryCard
            className="h-full"
            categoryName="Some large category name"
            to="category/some-large-category-name"
          />
          <Card>
            <button
              className="flex flex-col w-full hover:bg-gray-200 text-emerald-600 hover:text-emerald-700"
              onClick={openAddCategoryModal}
            >
              <Icon id="circle-plus" className="p-4 aspect-square" />
              <p className="px-3 py-2">Add new category</p>
            </button>
          </Card>
        </div>
      </div>
      <Dialog
        isOpen={isAddAccountModalOpen}
        onDismiss={closeAddAccountModal}
        aria-labelledby="add-account-title"
      >
        <form className="p-4">
          <h2 className="text-lg" id="add-account-title">
            Add account
          </h2>
          <div className="flex items-baseline mb-2">
            <label className="mr-1 whitespace-nowrap" htmlFor="account-name">
              Account name:
            </label>
            <input
              id="account-name"
              className="w-full border border-gray-300 rounded-sm px-2 py-2"
              type="text"
              placeholder="@instagram"
              maxLength={30}
            />
          </div>
          <Button className="w-full" type="submit" onClick={() => {}}>
            Add account
          </Button>
        </form>
      </Dialog>
      <Dialog
        isOpen={isAddCategoryModalOpen}
        onDismiss={closeAddCategoryModal}
        aria-labelledby="add-category-title"
      >
        <form className="p-4">
          <h2 className="text-lg" id="add-category-title">
            Add category
          </h2>
          <div className="flex items-baseline mb-2">
            <label className="mr-1 whitespace-nowrap" htmlFor="category-name">
              Category name:
            </label>
            <input
              id="category-name"
              className="w-full border border-gray-300 rounded-sm px-2 py-2"
              type="text"
              placeholder="Artists..."
              maxLength={30}
            />
          </div>
          <Button className="w-full" type="submit" onClick={() => {}}>
            Add category
          </Button>
        </form>
      </Dialog>
    </div>
  )
}
