/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('btutorials', [])

.service('Btutorials', [function(){
    
    var btutorials_list = [
        {
          key: 'bāraḥ',
          termine: 'בָּרַח',
          traslitterazione: 'bāraḥ',
          significato: 'fuggire, scappare;',
          grammatica: 'v.',
          altro: 'Qal, qatal, 3 ms, fuggì, scappò;',
          id: '1'
        },
        {
            key: 'beṯûlāh',
            termine: 'בְּתוּלָה',
            traslitterazione: 'beṯûlāh',
            significato: 'vergine;',
            grammatica: 'n. f.',
            altro: 'cstr. בְּתוּלַת - pl. f. בְּתוּלוֹת',
            id: '2'
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