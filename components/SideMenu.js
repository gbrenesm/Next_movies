import Modal from './Modal'
import FromCreateMovie from './FormCreateMovie'

const SideMenu = ({categories}) => {
  return (
    <div>
      <Modal>
        <FromCreateMovie categories={categories}/>
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map(category => (
          <a href="#" key={category.id} className="list-group-item">{category.name}</a>
        ))}
      </div>
    </div>
  )
}

export default SideMenu