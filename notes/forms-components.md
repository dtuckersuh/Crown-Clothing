# Shop Page

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

# Collection Item

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

# Header Component

- make new folder 'assets' in src with crown.svg
- Functional component
- import ReactComponent as Logo from svg
- 'header' div
    - 'logo-container' Router Link to '/' homepage
        - 'logo' Logo
    - 'options' div
        - 'shop' Link
        - 'option' Link
- import Header into App.js
    - initialize above Switch so it always appears on every page
    
# Forms 

- Forms in React 
    - Sign in component
    - Register component
    - Each has their own state

- Sign In Component
    - Build new page 'sign-in-and-sign-up'
        - Functional component
        - 'sign-in-and-sign-up' div
        - import into App.js and add route '/signin'
    - 'sign-in' component
        - Class component because we must store user input into state
        - state: email, password
        - handleSubmit()
            - given event, event.preventDefault()
            - setState({ email: '', password: '' })
        - handleChange()
            - given event, destructure value, name from event.target
            - setState({[name]: value})
        - render
            - 'sign-in' div
                - h2
                - span
                - form onSubmit = {this.handleSubmit}
                    - input name, type='email', value is state.email w/ required
                    - label 'Email'
                    - input name, type='password', value is state.password w/ 'required'. onChange={this.handleChange()}
                    - label 'Password' 
        - import into sign-in-and-sign-up page

- Form Input Component
    - Functional component
    - receives {handleChange, label, ...otherProps }
    - 'group' div
        - 'form-input' input w/ onChange=handleChange {...otherProps}
            - {label ? `${props.value.length} ? 'shrink' : ''} form-input-label`} : null

