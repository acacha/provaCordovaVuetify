# Menú de navegació

Vuetify utiliza llista de items per mostrar el menú. Com convertir en links?

Utilitzar path:

 items: [
        { icon: 'contacts', text: 'Contacts', path: '/contacts' },
        { icon: 'history', text: 'Frequently contacted', path: '/faqs' },
 
I utilitzar atriubut to a "v-list-tile"

<v-list-tile
        v-for="(child, i) in item.children"
        :key="i"
        @click=""
        :to="{path: child.path }"
> 

# Environment

https://vue-loader.vuejs.org/en/workflow/production.html

# CONFIGURACIó LAYOUT PRINCIPAL (APP SHELL) i RUTES