#characterCounter

####How to use it:
This feather weight jQuery plugin is exceptionally simple to use and gives you power to customize few things.

1. Apply plugin to any input
2. Apply characterCounter function to that input ID
3. Give "counter" ID to any DIV/SPAN tag to display counter

####Example:

```
$('ID/Class of Input box').characterCounter({
                        maxLen: 15,
                        warningLen: 5,
                        showMsg: true,
                        customMsg: "You have exceeded the permissible limit of characters..",
                        separator: "/",
                        warningColor: "#d50000",
                                      });
```

####Customization:
Here is detail of each parameter you pass to object

1. Maximum length of message [Mandatory]

  **maxLen: 320**

2. Color coded will be applied to value below this [Mandatory]

  **warningLen: 60**

3. Show alert to user or not, value TRUE or FALSE [Mandatory]

  **showMsg: true**

4. If showMsg is TRUE then you can set customize message otherwise default message will be used [Optional]

  **customMsg: "You have exceeded the permissible limit of characters.."**

5. Define your own seprator here [Optional]

  **separator: "/"**

6. Color coding for value below waringLen [Mandatory]

  **warningColor: "#d50000"**

####Your document structure:

```
<!DOCTYPE HTML>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Your Website</title>
</head>

<body>
    <form>
        <fieldset>
            <legend>Contact form</legend>
            <p>
                <input type="text" name="countThisBox" id="countThisBox" />
                <label for="countThisBox">Count this idiot box!</label>
                <div id="counter"></div>
            </p>

        </fieldset>
    </form>
    <script type="application/javascript" src="../js/jquery.min.js"></script>
    <script type="application/javascript" src="../js/characterCounter.min.js"></script>
    <script type="application/javascript">
        $('#countThisBox').characterCounter({
            maxLen: 15,
            warningLen: 5,
            showMsg: true,
            customMsg: "You have exceeded the permissible limit of characters..",
            separator: "/",
            warningColor: "#d50000",
        });
    </script>
</body>

</html>
```

######For more information, check out Git page of this plugin - [Visit Page!] (http://kalpeshsingh.github.io/characterCounter/)

NEW - Now you can read comprehensive tutorial about characterCounter on [OnExtraPixel] (http://www.onextrapixel.com/2016/01/29/charactercounter-building-a-feather-weight-jquery-character-counting-plugin/)
