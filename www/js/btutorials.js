/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('btutorials', [])

.service('Btutorials', [function(){
    
    var btutorials_list = [
        {
          key: '’āḇ',
          termine: 'אָב',
          traslitterazione: '’āḇ',
          significato: 'padre;',
          grammatica: 'n. m.',
          altro: 'cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת',
          id: '1'
        },
        {
            key: '’êḵāh',
            termine: 'אֵיכָה',
            traslitterazione: '’êḵāh',
            significato: 'come? come mai?;',
            grammatica: 'particella interrogativa',
            altro: '',
            id: '2'
        },
       
        
        {
            key: '’ên',
            termine: 'אֵין',
            traslitterazione: '’ên',
            significato: 'non c’è, non ci sono, non esiste;',
            grammatica: 'particella di negazione',
            altro: '',
            id: '3'
        },
        {
            key: '’îš',
            termine: 'אִישׁ',
            traslitterazione: '’îš',
            significato: 'uomo, marito, maschio;',
            grammatica: 'n. m.',
            altro: 'cstr. אִישׁ - pl. ass. אֲנָשִׁים - cstr. אַנְשֵׁי',
            id: '4'
        },
        {
            key: '’āḵal',
            termine: 'אָכַל',
            traslitterazione: '’āḵal',
            significato: 'mangiare;',
            grammatica: 'v.',
            altro: 'Qal, qatal, 3 ms, mangiò; ptc. att. אֹכֵל;',
            id: '5'
        },
        {
            key: '’æmeṯ',
            termine: 'אֱמֶת',
            traslitterazione: '’æmeṯ',
            significato: 'verità, affidabilità, correttezza, fedeltà, costanza;',
            grammatica: 'n. f.',
            altro: 'cstr. אֱמֶת',
            id: '6'
        }
        
       
        
      ];
      
      var btutorials_keys = {};

      for (var i=0;i<btutorials_list.length;i++){
        btutorials_keys[btutorials_list[i].key] = btutorials_list[i];
      }

    return {
        list: btutorials_list,
        keys: btutorials_keys
    }

}]);