input = prompt("შემოიტანე კვირის დღე(1, 2, 3, 4, 5, 6, 7)");

        switch (input){
            case "1":
                result = "დღეს ორშაბათია..."
                break;
            case "2":
                result = "დღეს სამშაბათია..."
                break;
            case "3":
                result = "დღეს ოთხშაბათია..."
                break
            case "4":
                result = "დღეს ხუთშაბათია..."
                break
            case "5":
                result = "დღეს პარასკევია..."
                break
            case "6":
                result = "დღეს შაბათია..."
                break
            case "7":
                result = "დღეს კვირაა..."
                break
            case null:
                result = `
                    <span style="color:green; font-style:italic;">თქვენ დააჭირეთ Cancel ღილაკს. გისურვებთ ბედნიერ დღეს!!!</span>
                `  
                break  
            default:
                result = "ესეთი დღე არ არსებობს!!!"         
        }

        document.getElementById("1").innerHTML = result