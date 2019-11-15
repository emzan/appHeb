/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ctutorials', [])

.service('Ctutorials', [function(){
    
    var ctutorials_list = [
        {
          key: 'gāḏôl',
          termine: 'גָּדוֹל',
          traslitterazione: 'gāḏôl',
          significato: 'grande, importante;',
          grammatica: 'agg.',
          altro: 'cstr. גְּדוֹל - s. f. גְּדוֹלָה -  pl. m. גְּדוֹלִים - pl. f. גְּדוֹלוֹת',
          id: '1'
        },
        {
            key: 'gālāh',
            termine: 'גָּלָה',
            traslitterazione: 'gālāh',
            significato: 'scoprire, rimuovere;',
            grammatica: 'v.',
            altro: 'Qal, qatal, 3 ms, scoprì, rimosse, dislocò, partì, andò in esilio;',
            id: '2'
        }
       
        
        
      ];
      
      var ctutorials_keys = {};

      for (var i=0;i<ctutorials_list.length;i++){
        ctutorials_keys[ctutorials_list[i].key] = ctutorials_list[i];
      }

    return {
        list: ctutorials_list,
        keys: ctutorials_keys
    }

}]);