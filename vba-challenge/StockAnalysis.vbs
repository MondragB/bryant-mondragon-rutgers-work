Sub StockAnalysis():

'Variable definitions
Dim ticker As String

Dim stockOpen, stockClose, stockChange, stockPercent As Double

Dim volume, lastRow, lastRowK As Long

Dim totalTickers As Integer

For Each ws In Worksheets

    ws.Activate
    
    ' Add header columns for each worksheet
    Range("I1").Value = "Ticker"
    Range("J1").Value = "Yearly Change"
    Range("K1").Value = "Percent Change"
    Range("L1").Value = "Total Stock Volume"
    Range("O2").Value = "Greatest % increase"
    Range("O3").Value = "Greatest % decrease"
    Range("O4").Value = "Greatest Total Volume"
    Range("P1").Value = "Ticker"
    Range("Q1").Value = "Value"
    
    'Initial Conditions for variables set
    totalTickers = 0
    stockOpen = 0
    stockClose = 0
    volume = 0
    lastRow = Cells.SpecialCells(xlCellTypeLastCell).Row

    'Loop to look through each row of column 1
    For i = 2 To lastRow
    
        'Grabbing the initial value for the ticker
        ticker = Cells(i, 1).Value
        
        'Only grab the value of opening if it has not reset
        If (stockOpen = 0) Then
            stockOpen = Cells(i, 3).Value
        End If
        
        'Keep running total of stock volume
        volume = volume + Cells(i, 7).Value
        
        'Comparison to see when we get to a new ticker value
        If Cells(i + 1, 1).Value <> ticker Then
            
            'Add the value of the ticker to the summary table
            totalTickers = totalTickers + 1
            Cells(totalTickers + 1, 9).Value = ticker
            
            'Grab the closing price
            stockClose = Cells(i, 6).Value
        
            'Calculate the yearly change
            stockChange = stockClose - stockOpen
            
            'Store the change in the summary table
            Cells(totalTickers + 1, 10).Value = stockChange
            
            'Color cells according to amount of change, 4 = green, 3 = red, 6 = yellow
            If (stockChange > 0) Then
                Cells(totalTickers + 1, 10).Interior.ColorIndex = 4
            ElseIf stockChange < 0 Then
                Cells(totalTickers + 1, 10).Interior.ColorIndex = 3
            Else
                Cells(totalTickers + 1, 10).Interior.ColorIndex = 6
            End If
            
            'Calculate the percent of change
            If (stockOpen = 0) Then
                stockPercent = 0
            Else
                stockPercent = (stockChange / stockOpen)
            End If
            
            'Store values in the summary table, 11 for percent and 12 for volume total
            Cells(totalTickers + 1, 11).Value = Format(stockPercent, "0.00%")
            Cells(totalTickers + 1, 12).Value = volume
            
            'Reset values for new ticker
            stockOpen = 0
            volume = 0
            
        End If
        
    Next i
    
    
    'Bonus
    lastRowK = Cells(Rows.Count, 11).End(xlUp).Row
    
    For i = 2 To lastRowK

    'Grabbing greatest increase
    If (Cells(i, 11).Value > Cells(2, 17).Value) Then
        Cells(2, 17).Value = Cells(i, 11).Value
        Cells(2, 16).Value = Cells(i, 9).Value
    End If
    
    'Grabbing greatest decrease
    If (Cells(i, 11).Value < Cells(3, 17).Value) Then
        Cells(3, 17).Value = Cells(i, 11).Value
        Cells(3, 16).Value = Cells(i, 9).Value
    End If

    'Grabbing greatest increase in volume
    If (Cells(i, 12).Value > Cells(4, 17).Value) Then
        Cells(4, 17).Value = Cells(i, 12).Value
        Cells(4, 16).Value = Cells(i, 9).Value
    End If
    
    Next i
    
Next ws

End Sub



