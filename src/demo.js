//注意代码中的变量并非与你的项目是对应的，可做思路参考。
//这里的提供的代码是假设你使用了组件化开发，
//拆分出了两个子组件，然后从父组件传入了书架图书数据，
//和搜索组件的搜索结果进行对比同步图书的 shelf 值。

this.setState((prevState, props) => {
  // 从父组件传入书架图书数据
  const shelfBooks = props.books;

  const newSearchBooks = searchBooks.map(searchBook => {
    // 如果该图书在书架中，会返回该图书，否则返回 undefined
    const searchBookInshelfBook = shelfBooks.find(
      shelfBook => shelfBook.id === searchBook.id
    );

    // 同步 shelf 值，并返回该新的图书对象
    return {
      ...searchBook,
      shelf: searchBookInshelfBook
        ? searchBookInshelfBook.shelf
        : "none"
    };
  });

  // 返回新的搜索图书数据，更新界面
  return {
    searchBooks: newSearchBooks
  };