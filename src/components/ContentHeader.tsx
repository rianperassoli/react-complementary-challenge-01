interface ContentHeaderProps {
  genreTitle: string
}

export function ContentHeader({ genreTitle }: ContentHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span>{genreTitle}</span></span>
    </header>
  )
}