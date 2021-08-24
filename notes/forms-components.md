## Shop Page

- Collection Preview component
    - Standard functional component
    - destructure 'title', 'items' in props
    - Returns outer div that contains collection ('collection-preview')
        - h1 'title'
        - div 'preview'
            - map over 'items'
    - use filter() to filter items based on index < 4

- Shop Page component
    - import CollectionPreview
    - map over collections state
        - key = id
        - map with ...otherProps

## Collection Item

- Focus on building visual component of individual collection items on Shop page
- Collection Item component
    - Functional component
    - props: id, name, price, imageUrl
        - from shop.data.js
    - div 'collection-item'
        - div 'image', style: w/ backgroundImage
    - div 'collection-footer'
        - span 'name'
        - span 'price'
    - import CollectionItem into CollectionPreview
        - destructure id and rest of props and pass them into CollectionItem component
