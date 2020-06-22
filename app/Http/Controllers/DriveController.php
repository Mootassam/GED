<?php

namespace App\Http\Controllers;

use App\Drive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class DriveController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */



    public function index()
    {
        $all=Drive::latest()->get();
        return $all ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $document_ext = ['doc', 'docx', 'pdf', 'odt', 'pptx' ,'xlsx'];

    /**
     * Constructor
     */

    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'file' => 'required'
        ]);

        $max_size = (int)ini_get('upload_max_filesize') * 1000;
        $all_ext = implode(',', $this->allExtensions());
        $model = new Drive();
        $file = $request->file('file');
        $ext = $file->getClientOriginalExtension();
        $type = $this->getType($ext);

        if (Storage::putFileAs('/public/'. $type . '/', $file, $request['name'] . '.' . $ext)) {
            return auth()->user()->drive()->create([
                    'name' => $request['name'],
                    'type' => $type,
                    'extension' => $ext,
                    'user_id' =>  auth()->id() ,
                ]);

                auth()->user()->drive()->create($request->all()) ;
        }

        return response()->json(false);
    }

    public function downloadFile($file){
        $path = public_path($file);
        $header = [
            'Content-Type' => 'application/*',
        ];
        return response()->download( $file, $header);
    }


    private function getType($ext)
    {
        if (in_array($ext, $this->image_ext)) {
            return 'image';
        }

        if (in_array($ext, $this->document_ext)) {
            return 'document';
        }
    }

    /**
     * Get all extensions
     * @return array Extensions of all file types
     */
    private function allExtensions()
    {
        return array_merge($this->image_ext,$this->document_ext);
    }

    /**
     * Get directory for the specific user
     * @return string Specific user directory
     */
    private function getUserDir()
    {
        return Auth::user()->name . '_' . Auth::id();
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Drive  $drive
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $req = Drive::where('deleted_at' ,'<>' ,'null')->get();
        return $req ;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Drive  $drive
     * @return \Illuminate\Http\Response
     */
    public function edit(Drive $drive)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Drive  $drive
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $destroy = Drive::findOrFail($id);
        $destroy->deleted_at = 1 ;
        $destroy->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Drive  $drive
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $destroy = Drive::findOrFail($id);
        $destroy->delete();
        return 'deleted';
    }
}
